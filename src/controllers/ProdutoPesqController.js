const Produto = require("../models/Produto");

module.exports = {
  //Busca UM
  async show(req, res) {
    const { name } = req.query;
    const response = await Produto.find({ name: new RegExp(name, "i") });

    return res.json(response);
  }
};
