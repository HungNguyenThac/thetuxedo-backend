const mongoose = require("mongoose");
const { MAX } = require("../constant/index");

const productCodeSchema = mongoose.Schema(
  {
    tenSP: { type: String, default: "" },
    phanLoai: { type: String, default: "" },
    gia: { type: Int32Array, default: "" },
    maSP: { type: String, default: "" },
    anhBia: { type: String, default: "" },
    moTa: { type: Array },
    listAnh: { type: Array },
    size: { type: Array },
    giamGia: { type: Int32Array, default: "" },
    boardSize: { type: Array },
  },
  { collections: "products" }
);

const ProductCodeModel = mongoose.model(
  "product",
  productCodeSchema,
  "product"
);

module.exports = ProductCodeModel;
