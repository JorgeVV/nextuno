const dotenv = require("dotenv");
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
  assetPrefix: process.env.NEXT_STATIC_ASSET_PREFIX || "",
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

module.exports = withPlugins(
  [
    [withTypescript],
    [withCss],
    [withSass],
    [withOffline, nextOfflineConfig],
    [withOptimizedImages],
    [withBundleAnalyzer, bundleAnalyzerConfig],
    [withNextEnv]
  ],
  commonConfiguration
);
