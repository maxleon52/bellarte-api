const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProdutoSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    qtd_days_todo: {
      type: Number,
      required: true
    },
    ref: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    qtd_ball_wool: {
      type: Number,
      required: true
    },
    num_needle: {
      type: String,
      required: true
    },
    link: {
      type: String
    },
    comments: {
      type: String
    },
    photo: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

ProdutoSchema.plugin(mongoosePaginate);

module.exports = model("Produto", ProdutoSchema);
