const app = require("./app.js");
const { envs } = require("./config/environments/environments.js");

app.listen(envs.PORT, () => {
  console.log("Server is running on port" + envs.PORT);
});
