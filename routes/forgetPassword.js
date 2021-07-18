const express = require("express");
const userModel = require("../mongoose/user");
const routesForgetPassWord = express.Router();

routesForgetPassWord.post("/password", async (req, res, next) => {
  var email = req.body.emailValue;
  var loginName = req.body.usernameValue;
  try {
    var responseName = await userModel.findOne({
      loginName: loginName,
    });
    if (responseName === null) {
      res.send({ status: 400, mess: "Sai tên đăng nhập", element: 303 });
    } else if (responseName.email !== email) {
      res.send({ status: 400, mess: "Email không trùng khớp", element: 304 });
    } else if (responseName.email === email) {
      res.send({
        status: 200,
        mess: `Mật khẩu của bạn: ${responseName.password}`,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = routesForgetPassWord;
