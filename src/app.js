// 1. Importar express
const express = require("express");
const geneticDiseases = require("./genetic-diseases/genetic-diseases.route.js");

// 2. Const app con todas las funcionalidades de express
const app = express();

const calcularReqTime = (req, res, next) => {
  const reqTime = new Date().toISOString();
  req.reqTime = reqTime;
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(calcularReqTime);

app.use("/api/v1", geneticDiseases);

// 4. Poner a escuchar el servidor por un puerto
app.listen(3000, () => {
  console.log("Server is running on port" + 3000);
});
