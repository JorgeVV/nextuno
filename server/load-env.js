const dotenv = require("dotenv");

const loadEnv = options => {
  const result = dotenv.config(options);
  if (result.error) {
    throw result.error;
  }
};

module.exports = loadEnv;
