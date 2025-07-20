const { validationResult } = require("express-validator");
const productListService = require("../services/productListService");

const addProductControl = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const product = await productListService.addProduct(req.body);
    res.status(201).json(product);
  } catch (error) {}
  res.status(400).json({ message: error.message });
};

const getProductControl = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    const product = await productListService.getProduct(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProductsControl = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const products = await productListService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProductControl = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const data = req.body;

    const product = await productListService.updateProduct(id, data);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(201).json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProductControl = async (req, res) => {
  try {
    const product = await productListService.deleteProduct(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(201).json({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addProductControl,
  deleteProductControl,
  getProductControl,
  getProductsControl,
  updateProductControl,
};
