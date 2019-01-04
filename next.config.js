const copyWebpackPlugin = require("copy-webpack-plugin");
const ejs = require("ejs");
const loadEnv = require("./server/load-env");
const nextEnv = require("next-env");

const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withCss = require("@zeit/next-css");
const withOffline = require("next-offline");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withTypescript = require("@zeit/next-typescript");
const withNextEnv = nextEnv();

loadEnv();

const commonConfiguration = {
  cssModules: true,
  assetPrefix: process.env.NEXT_STATIC_ASSET_PREFIX
};

const bundleAnalyzerConfig = {
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    }
  }
};

const nextOfflineConfig = {
  dontAutoRegisterSw: true,
  workboxOpts: {
    clientsClaim: true,
    skipWaiting: true,
    globDirectory: ".",
    globPatterns: ["static/**/*"]
  }
};

// TODO: extract to another file or package
const withTemplates = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { templates = [] } = nextConfig;

      const resolvedTemplates = templates.map(({ from, to, inject }) => ({
        from,
        to,
        toType: "file",
        transform: content => ejs.render(content.toString(), inject)
      }));

      if (resolvedTemplates.length > 0) {
        config.plugins.push(new copyWebpackPlugin(resolvedTemplates, options));
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
};

const templatesConfig = {
  templates: [
    {
      name: "webmanifest",
      from: "assets/templates/manifest.json.ejs",
      to: "static/manifest.json",
      inject: {
        assetPrefix: `${commonConfiguration.assetPrefix || ""}/_next-static`
      }
    }
  ]
};

module.exports = withPlugins(
  [
    [withTypescript],
    [withCss],
    [withSass],
    [withOffline, nextOfflineConfig],
    [withOptimizedImages],
    [withBundleAnalyzer, bundleAnalyzerConfig],
    [withNextEnv],
    [withTemplates, templatesConfig]
  ],
  commonConfiguration
);
