const dotenv = require("dotenv");

module.exports = options => {
  const result = dotenv.config(options);
  if (result.error) {
    throw result.error;
  }
};
