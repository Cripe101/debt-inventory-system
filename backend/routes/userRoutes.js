// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const passport = require("passport");
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

// ADD USER
router.post("/", addUserValidationRules, userController.addUserControl);

// GET USERS
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  userController.getUsersControl
);

// GET USER
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  userController.getUserControl
);

// UPDATE USER
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  userController.updateUserControl
);

// DELETE USER
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  userController.deleteUserControl
);

module.exports = router;
