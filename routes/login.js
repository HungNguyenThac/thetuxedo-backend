const express = require("express");
const userModel = require("../mongoose/user");
var jwt = require("jsonwebtoken");
const routesLogin = express.Router();
const bcrypt = require("bcrypt");

routesLogin.post(
  "/login",
  async function (req, res, next) {
    var loginName = req.body.usernameValue;
    var password = req.body.passwordlValue;
    try {
      var responseName = await userModel.findOne({
        loginName: loginName,
      });
      if (responseName === null) {
        next();
      } else if (responseName !== null) {
        const match = await bcrypt.compare(password, responseName.password);
        if (!match) {
          res.send({ status: 400, mess: "Sai mật khẩu", element: 306 });
        } else if (match) {
          let token = jwt.sign({ id: responseName._id }, "thetuxedo");
          res.send({
            token: token,
            status: 200,
            user: responseName,
          });
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  async function (req, res, next) {
    var loginName = req.body.usernameValue;
    var password = req.body.passwordlValue;
    try {
      var responseEmail = await userModel.findOne({
        email: loginName,
      });
      if (responseEmail === null) {
        res.send({ status: 400, mess: "Sai tên đăng nhập", element: 305 });
      } else if (responseEmail !== null) {
        const match = await bcrypt.compare(password, responseEmail.password);
        if (!match) {
          res.send({ status: 400, mess: "Sai mật khẩu", element: 306 });
        } else if (match) {
          let token = jwt.sign({ id: responseEmail._id }, "thetuxedo");
          res.send({
            token: token,
            status: 200,
            user: responseEmail,
          });
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

module.exports = routesLogin;
