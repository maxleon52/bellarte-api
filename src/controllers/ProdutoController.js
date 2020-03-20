const Produto = require("../models/Produto");

module.exports = {
  //Busca TODOS
  async index(req, res) {
    //FEITO NO BRAÇO
    // let query = {};
    // let page = req.query.page;
    // let limit = 7;
    // let skip = limit * (page - 1);

    // const response = await Produto.find(query).skip(skip).limit(limit);

    //USANDO MONGOOSE-PAGINATE
    const { page = 1 } = req.query;
    const response = await Produto.paginate({}, { page, limit: 7 });
    console.log(response)
    return res.json(response);
  },

  //Busca UM
  async show(req, res) {
    const { name } = req.query;
    const response = await Produto.find({ name: new RegExp(name, "i") });

    return res.json(response);
  },

  //Cadastra UM
  async create(req, res) {
    // const { name } = req.body;
    const existProduto = await Produto.findOne({
      name: req.body.name
    });
    console.log(existProduto);

    if (existProduto) {
      return res.status(400).json({
        message: "Ja existe um produto cadastrado com esse nome!"
      });
    }
    const response = await Produto.create(req.body);

    return res.json(response);
  },
  //Deletar UM
  async destroy(req, res) {
    try {
      const { _id } = req.params;
      const response = await Produto.deleteOne({ _id: _id });
      return res.json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};
