const express = require("express");
const userModel = require("../mongoose/user");
var jwt = require("jsonwebtoken");
const routesAddHistory = express.Router();

routesAddHistory.put("/addhistory", async (req, res, next) => {
  let token = req.headers.authorization;
  let history = req.body.history;
  try {
    let id = jwt.verify(token, "thetuxedo").id;
    let response = await userModel.findOneAndUpdate(
      { _id: id },
      {
        history: history.history,
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

module.exports = routesAddHistory;
