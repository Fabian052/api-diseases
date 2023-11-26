const dotenv = require("dotenv");
const env = require("env-var");
dotenv.config();

exports.envs = {
  PORT: env.get("PORT").required().asPortNumber(),
};
