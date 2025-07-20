const express = require("express");
const productListController = require("../controllers/productListController");
const router = express.Router();
const passport = require("passport");
const { body } = require("express-validator");
const addProductValidationRules = [
  [
    body("label").notEmpty().trim(),
    body("price").isNumeric().notEmpty().trim(),
    body("img").notEmpty().trim(),
    body("category").notEmpty().trim(),
  ],
];

// ADD PRODUCT
router.post(
  "/",
  addProductValidationRules,
  productListController.addProductControl
);

// GET PRODUCTS
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  productListController.getProductsControl
);

// GET PRODUCT
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  productListController.getProductControl
);

// UPDATE PRODUCT
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  productListController.updateProductControl
);

// DELETE PRODUCT
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  productListController.deleteProductControl
);

module.exports = router;
