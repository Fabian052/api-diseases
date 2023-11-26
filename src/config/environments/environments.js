const dotenv = require("dotenv");
const env = require("env-var");
dotenv.config();

exports.envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  DB_URI: env.get("DB_URI").required().asUrlString(),
};
