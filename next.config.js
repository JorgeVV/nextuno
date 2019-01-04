const loadEnv = require("./server/load-env");
const nextEnv = require("next-env");

const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withCss = require("@zeit/next-css");
const withOffline = require("next-offline");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withTypescript = require("@zeit/next-typescript");

loadEnv();

const withNextEnv = nextEnv();

const commonConfiguration = { cssModules: true };

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
