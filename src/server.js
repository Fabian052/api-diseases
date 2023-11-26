const app = require("./app.js");
const { authenticated, syncUp } = require("./config/database/database.js");
const { envs } = require("./config/environments/environments.js");

async function main() {
  try {
    await authenticated();
    await syncUp();
  } catch (error) {
    console.log(error);
  }
}

main();

app.listen(envs.PORT, () => {
  console.log("Server is running on port" + envs.PORT);
});
