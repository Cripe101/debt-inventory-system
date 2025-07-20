const mongoose = require("mongoose");

const debtorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    debts: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductList",
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Debtors = mongoose.model("Debtors", debtorsSchema);
module.exports = { Debtors };
