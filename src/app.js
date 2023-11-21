// 1. Importar express
const express = require("express");

// 2. Const app con todas las funcionalidades de express
const app = express();

app.use(express.json());

// Funciones de los endpoints
const findAll = (_, res) => {
  return res.status(200).json({
    message: "Method get - findAll",
  });
};

const create = (req, res) => {
  const disease = req.body;

  return res.status(200).json({
    message: "Method post - create",
    data: disease,
  });
};

const findOne = (req, res) => {
  const { id } = req.params;
  console.log(id);

  return res.status(200).json({
    message: "Method get - findOne",
    id,
  });
};

const update = (req, res) => {
  const { id } = req.params;
  console.log(id);

  return res.status(200).json({
    message: "Method patch - update",
    id,
  });
};

const del = (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    message: "Method delete - delete",
    id,
  });
};

// 3. Definir el endpoints
// Buscar todas las enfermedades
app.get("/api/v1/genetic-diseases", findAll);

// Crear una enfermedad
app.post("/api/v1/genetic-diseases", create);

// Buscar una enfermedad
app.get("/api/v1/genetic-diseases/:id", findOne);

// Actualizar una enfermedad
app.patch("/api/v1/genetic-diseases/:id", update);

// Delete disease
app.delete("/api/v1/genetic-diseases/:id", del);

// 4. Poner a escuchar el servidor por un puerto
app.listen(3000, () => {
  console.log("Server is running on port" + 3000);
});
