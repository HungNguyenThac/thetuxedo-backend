const express = require("express");
const userModel = require("../mongoose/user");
var jwt = require("jsonwebtoken");
const routesAddCart = express.Router();

routesAddCart.put("/addcart", async (req, res, next) => {
  let token = req.headers.authorization;
  let cartForUser = req.body.cartForUser;
  try {
    let id = jwt.verify(token, "thetuxedo").id;
    let response = await userModel.findOneAndUpdate(
      { _id: id },
      {
        cart: cartForUser.cartForUser,
      },
      {
        new: true,
        upsert: true,
      }
    );
    if (response !== null) {
      res.send({ status: 200, user: response });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = routesAddCart;
