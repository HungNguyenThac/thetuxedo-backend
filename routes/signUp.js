const express = require("express");
const path = require("path");
const userModel = require("../mongoose/user");
const routesSignUp = express.Router();
const bcrypt = require("bcrypt");

routesSignUp.post(
  "/signup",
  async (req, res, next) => {
    var loginName = req.body.usernameValue;

    try {
      let response = await userModel.findOne({ loginName: loginName });
      if (response === null) {
        next();
      } else {
        res.send({
          status: 400,
          mess: "Tên tài khoản đã có người sử dụng",
          element: 300,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  async (req, res, next) => {
    var email = req.body.emailValue;

    try {
      let response = await userModel.findOne({ email: email });
      if (response === null) {
        next();
      } else {
        res.send({
          status: 400,
          mess: "Email đã có người sử dụng",
          element: 301,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  async (req, res, next) => {
    var phoneNumber = req.body.phonenumber;

    try {
      let response = await userModel.findOne({ phoneNumber: phoneNumber });
      if (response === null) {
        next();
      } else {
        res.send({
          status: 400,
          mess: "Số điện thoại đã có người sử dụng",
          element: 302,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  async (req, res, next) => {
    var loginName = req.body.usernameValue;
    var email = req.body.emailValue;
    var phoneNumber = req.body.phonenumber;
    var password = req.body.passwordValue;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      let response = await userModel.create({
        phoneNumber: phoneNumber,
        email: email,
        loginName: loginName,
        password: hashedPassword,
      });
      console.log(response);
      if (response !== null) {
        res.send({ status: 200, mess: "Tạo tài khoản thành công" });
      } else {
        res.send({ status: 400, mess: "Một lỗi đã xảy ra!" });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

module.exports = routesSignUp;
