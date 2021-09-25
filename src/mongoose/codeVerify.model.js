const mongoose = require("mongoose");
const { MAX } = require("../constant/index");

const verifyCodeSchema = mongoose.Schema({
  code: {
    type: String,
    maxLength: MAX.VERIFY_CODE,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    maxLength: MAX.EMAIL_LEN,
    required: true,
    trim: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  createdAt: { type: Date, expires: 10 * 60 * 1000, default: Date.now },
});

const VerifyCodeModel = mongoose.model(
  "verifyCodes",
  verifyCodeSchema,
  "verifyCodes"
);

module.exports = VerifyCodeModel;
