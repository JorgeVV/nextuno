const dotenv = require("dotenv");

module.exports = options => {
  const result = dotenv.config(options);
  if (result.error) {
    // eslint-disable-next-line no-console
    console.warn("Couldn't load .env file.");
  }
};
