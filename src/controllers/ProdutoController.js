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
    const options = {
      page: page,
      limit: 7,
      sort: { createdAt: -1 }
    };
    const response = await Produto.paginate({}, options);
    console.log(response);
    return res.json(response);
  },

  //Busca UM
  async show(req, res) {
    const { _id } = req.params;
    const response = await Produto.find({ _id: _id });

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

  //Atualiza UM
  async update(req, res) {
    try {
      const product = await Produto.findByIdAndUpdate(
        req.params._id,
        req.body,
        {
          new: true
        }
      );

      return res.json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //Deletar UM
  async destroy(req, res) {
    try {
      const { _id } = req.params;
      const response = await Produto.findByIdAndDelete({ _id: _id });
      return res.json({ message: "Produto deletado com sucesso!" });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};
