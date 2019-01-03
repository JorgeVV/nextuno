const loadEnv = require("./server/load-env");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
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

module.exports = withPlugins(
  [
    [withTypescript],
    [withOptimizedImages],
    [withBundleAnalyzer, bundleAnalyzerConfig]
  ],
  {
    publicRuntimeConfig: {
      GRAPHQL_API_URL: process.env.GRAPHQL_API_URL
    }
  }
);
