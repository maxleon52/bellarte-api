const Produto = require("../models/Produto");

module.exports = {
  //Busca TODOS
  async index(req, res) {
    const response = await Produto.find();

    return res.json(response);
  },

  //Cadastra UM
  async create(req, res) {
    const response = await Produto.create(req.body);

    return res.json(response);
  }
};
