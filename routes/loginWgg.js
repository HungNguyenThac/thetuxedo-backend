const express = require("express");
const userModel = require("../mongoose/user");
var jwt = require("jsonwebtoken");
const routesLoginWgg = express.Router();

routesLoginWgg.post(
  "/SUWGG",
  async function (req, res, next) {
    var email = req.body.email;
    try {
      let response = await userModel.findOne({
        email: email,
      });
      if (response !== null) {
        let token = jwt.sign({ id: response._id }, "thetuxedo");
        res.send({
          token: token,
          status: 200,
          user: response,
        });
      } else {
        next();
      }
    } catch (error) {
      res.send({ status: 400 });
    }
  },
  async function (req, res, next) {
    var loginName = req.body.loginName;
    var email = req.body.email;
    var phoneNumber = req.body.phonenumber;
    var name = req.body.name;
    var avatar = req.body.avatar;
    try {
      let response = await userModel.create({
        loginName: loginName,
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        avatar: avatar,
      });
      if (response !== null) {
        let token = jwt.sign({ id: response._id }, "thetuxedo");
        res.send({
          token: token,
          status: 200,
          user: response,
        });
      } else if (response === null) {
        res.send({ status: 400 });
      }
    } catch (error) {
      res.send({ status: 400 });
    }
  }
);

module.exports = routesLoginWgg;
