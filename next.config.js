const copyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");
const ejs = require("ejs");
const nextEnv = require("next-env");

const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withCss = require("@zeit/next-css");
const withOffline = require("next-offline");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withTypescript = require("@zeit/next-typescript");
const withNextEnv = nextEnv();

const result = dotenv.config();
if (result.error) {
  // tslint:disable-next-line:no-console
  console.warn("Couldn't load .env file.");
}

const commonConfiguration = {
  assetPrefix: process.env.NEXT_STATIC_ASSET_PREFIX,
  cssModules: true
};

const bundleAnalyzerConfig = {
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    },
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    }
  }
};

const nextOfflineConfig = {
  dontAutoRegisterSw: true,
  workboxOpts: {
    clientsClaim: true,
    globDirectory: ".",
    globPatterns: ["static/**/*"],
    runtimeCaching: [
      {
        handler: "networkFirst",
        options: {
          cacheName: "html-cache",
          cacheableResponse: {
            statuses: [200]
          }
        },
        urlPattern: "/"
      }
    ],
    skipWaiting: true
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
      from: "assets/templates/manifest.json.ejs",
      inject: {
        assetPrefix: `${commonConfiguration.assetPrefix || ""}/_next-static`
      },
      name: "webmanifest",
      to: "static/manifest.json"
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
