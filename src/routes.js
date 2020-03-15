const express = require("express");
const routes = express.Router();

const ProdutoController = require("./controllers/ProdutoController");

// Rota teste
routes.get("/teste", (req, res) => {
  return res.json({ message: "hello world, servidor funcionando!" });
});

routes.get("/produtos", ProdutoController.index);
routes.post("/produto-novo", ProdutoController.create);

module.exports = routes;
