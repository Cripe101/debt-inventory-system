const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema(
//   {
//     label: { type: String, required: true },
//     img: { type: String, required: true },
//     price: { type: Number, required: true },
//     category: { type: String, required: true },
//   },
//   { timestamps: true }
// );

const productListSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductList = mongoose.model("ProductList", productListSchema);
module.exports = { ProductList };
