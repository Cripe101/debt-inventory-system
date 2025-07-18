// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
// const passport = require("passport");
const { body } = require("express-validator");
const addUserValidationRules = [
  [
    body("username").notEmpty().trim(),
    body("password").notEmpty().trim(),
    body("firstName").notEmpty().trim(),
    body("lastName").notEmpty().trim(),
    body("roles").notEmpty(),
  ],
];

router.post("/", addUserValidationRules, userController.addUserControl);

module.exports = router;
