const { ProductList } = require("../models/productListModel");

const addProduct = async (data) => {
  const doesExist = await ProductList.findOne({ label: data.label });
  if (doesExist) {
    throw new Error("Product already exist");
  }

  const product = new ProductList(data);
  await product.save();
  return product;
};

const getProducts = async () => {
  const products = await ProductList.find();
  return products;
};

const getProduct = async (id) => {
  const product = await ProductList.findById(id);
  return product;
};

const updateProduct = async (id, data) => {
  const product = await ProductList.updateOne({ _id: id }, data);

  return product;
};

const deleteProduct = async (id) => {
  const product = await ProductList.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );

  return product;
};

module.exports = {
  addProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
