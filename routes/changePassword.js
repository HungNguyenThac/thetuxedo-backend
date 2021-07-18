const express = require("express");
const userModel = require("../mongoose/user");
var jwt = require("jsonwebtoken");
const routesChangePassword = express.Router();
const bcrypt = require("bcrypt");

routesChangePassword.put("/changePassword", async function (req, res, next) {
  let token = req.headers.authorization;
  let password = req.body.oldPasswordValue;
  let newPassword = req.body.passwordValue;
  try {
    let id = jwt.verify(token, "thetuxedo").id;
    var responseUser = await userModel.findOne({
      _id: id,
    });
    if (responseUser !== null) {
      const match = await bcrypt.compare(password, responseUser.password);
      if (!match) {
        res.send({ status: 400, mess: "Mật khẩu hiện tại chưa đúng" });
      } else if (match) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        let response = await userModel.findOneAndUpdate(
          { _id: id },
          {
            password: hashedPassword,
          },
          {
            new: true,
            upsert: true,
          }
        );
        if (response) {
          let token = jwt.sign({ id: response._id }, "thetuxedo");
          res.send({
            token: token,
            status: 200,
            user: response,
            mess: "Bạn đã đổi mật khẩu thành công",
          });
        }
      }
    }
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = routesChangePassword;
