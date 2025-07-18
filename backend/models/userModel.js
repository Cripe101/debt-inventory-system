const mongoose = require("mongoose");
const roles = require("../constants/roles");

const userSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    debtors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Debtors",
      },
    ],
    inventory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventory",
    },
    username: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      select: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    roles: {
      type: String,
      enum: roles,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
