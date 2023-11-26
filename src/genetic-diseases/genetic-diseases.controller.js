// Funciones de los endpoints
const findAll = (req, res) => {
  const { reqTime } = req;
  return res.status(200).json({
    message: "Method get - findAll",
    reqTime,
  });
};

const create = (req, res) => {
  const { reqTime } = req;
  const disease = req.body;

  return res.status(200).json({
    message: "Method post - create",
    data: disease,
    reqTime,
  });
};

const findOne = (req, res) => {
  const { reqTime, saludar } = req;
  const { id } = req.params;

  return res.status(200).json({
    message: "Method get - findOne",
    id,
    reqTime,
    saludar,
  });
};

const update = (req, res) => {
  const { reqTime } = req;
  const { id } = req.params;
  console.log(id);

  return res.status(200).json({
    message: "Method patch - update",
    id,
    reqTime,
  });
};

const deleteGeneticDisease = (req, res) => {
  const { reqTime } = req;
  const { id } = req.params;

  return res.status(200).json({
    message: "Method delete - delete",
    id,
    reqTime,
  });
};

module.exports = {
  findAll,
  create,
  findOne,
  update,
  deleteGeneticDisease,
};
