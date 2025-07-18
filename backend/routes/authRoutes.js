const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/authController");

router.post(
  "/login",
  [body("username").notEmpty().trim(), body("password").notEmpty().trim()],
  authController.login
);

module.exports = router;
