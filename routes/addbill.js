const express = require("express");
const userModel = require("../mongoose/user");
var jwt = require("jsonwebtoken");
const routesAddBill = express.Router();

routesAddBill.put("/addbill", async (req, res, next) => {
  let token = req.headers.authorization;
  let bill = req.body.bill;
  try {
    let id = jwt.verify(token, "thetuxedo").id;
    let response = await userModel.findOneAndUpdate(
      { _id: id },
      {
        bill: bill.cloneBill,
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

module.exports = routesAddBill;
