const loadEnv = require("./server/load-env");
const nextEnv = require("next-env");

const withCss = require("@zeit/next-css");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withTypescript = require("@zeit/next-typescript");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

loadEnv();

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

const withNextEnv = nextEnv();

const commonConfiguration = { cssModules: true };

module.exports = withPlugins(
  [
    [withTypescript],
    [withCss],
    [withSass],
    [withOptimizedImages],
    [withBundleAnalyzer, bundleAnalyzerConfig],
    [withNextEnv]
  ],
  commonConfiguration
);
