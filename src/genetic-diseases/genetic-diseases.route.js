const express = require("express");

// Controller
const {
  findAll,
  create,
  findOne,
  update,
  deleteGeneticDisease,
} = require("./genetic-diseases.controller.js");

const router = express.Router();

// 3. Definir el endpoints
// Buscar todas las enfermedades
router.get("/genetic-diseases", findAll);

// Crear una enfermedad
router.post("/genetic-diseases", create);

// Buscar una enfermedad
router.get("/genetic-diseases/:id", findOne);

// Actualizar una enfermedad
router.patch("/genetic-diseases/:id", update);

// Delete disease
router.delete("/genetic-diseases/:id", deleteGeneticDisease);

module.exports = router;
