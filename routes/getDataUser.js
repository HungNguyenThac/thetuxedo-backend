const express = require("express");
const userModel = require("../mongoose/user");
var jwt = require("jsonwebtoken");
const routesGetData = express.Router();

routesGetData.post("/getData", async function (req, res, next) {
  let token = req.headers.authorization;
  if (token !== undefined) {
    try {
      let id = jwt.verify(token, "thetuxedo").id;
      let response = await userModel.findOne({ _id: id });
      if (response !== null) {
        res.send({ status: 200, data: response });
      }
    } catch (error) {
      res.send({ status: 400 });
    }
  } else {
    res.send({ status: 400 });
  }
});

module.exports = routesGetData;
