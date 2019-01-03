const dotenv = require("dotenv");
const nextEnv = require("next-env");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

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

module.exports = withPlugins([
  [withTypescript],
  [withOptimizedImages],
  [withBundleAnalyzer, bundleAnalyzerConfig],
  [withNextEnv]
]);
