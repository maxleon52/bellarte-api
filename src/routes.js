const express = require("express");
const routes = express.Router();

const multer = require("multer");
const multerConfig = require("./config/multer");
const ProdutoController = require("./controllers/ProdutoController");
const ProdutoPesqController = require("./controllers/ProdutoPesqController");

const upload = multer(multerConfig);

// Rota teste
routes.get("/teste", (req, res) => {
  return res.json({ message: "hello world, servidor funcionando!" });
});

routes.get("/produtos", ProdutoController.index);
routes.get("/produtos/busca", ProdutoPesqController.show);
routes.get("/produto/:_id", ProdutoController.show);
routes.delete("/produto/deletar/:_id", ProdutoController.destroy);
routes.post("/produto-novo", upload.single("photo"), ProdutoController.create);
routes.put("/produto/atualizar/:_id", ProdutoController.update);

module.exports = routes;
