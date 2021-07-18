const express = require("express");
const userModel = require("../mongoose/user");
var jwt = require("jsonwebtoken");
const routesDashboard = express.Router();

routesDashboard.post("/dashboard", async function (req, res, next) {
  let token = req.headers.authorization;
  let id = jwt.verify(token, "thetuxedo").id;
  try {
    let response = await userModel.findOne({ _id: id });
    if (response === null) {
      res.send({ status: 400 });
    } else if (response !== null) {
      if (response.password.length === 0) {
        res.send({ status: 200, element: 9527 });
      } else {
        let token = jwt.sign({ id: response._id }, "thetuxedo");
        res.send({ status: 200, element: 1, data: response, token: token });
      }
    }
  } catch (error) {
    res.send({ status: 400 });
  }
});

routesDashboard.put("/dashboard", async function (req, res) {
  let token = req.headers.authorization;
  let array = req.body.address;
  try {
    let id = jwt.verify(token, "thetuxedo").id;
    let response = await userModel.findOneAndUpdate(
      { _id: id },
      { address: array.array },
      {
        new: true,
        upsert: true,
      }
    );
    if (response === null) {
      res.send({ status: 400 });
    } else if (response !== null) {
      let token = jwt.sign({ id: response._id }, "thetuxedo");
      res.send({ status: 200, user: response, token: token });
    }
  } catch (error) {
    res.send({ status: 400 });
  }
});

module.exports = routesDashboard;
