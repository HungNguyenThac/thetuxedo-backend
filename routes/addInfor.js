const express = require("express");
const path = require("path");
const userModel = require("../mongoose/user");
const bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const routesAddInfor = express.Router();
const bcrypt = require("bcrypt");

routesAddInfor.post("/addinfor", async (req, res, next) => {
  let token = req.headers.authorization;
  let phoneNumber = req.body.phonenumber;
  let password = req.body.passwordValue;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    let id = jwt.verify(token, "thetuxedo").id;
    let response = await userModel.findOneAndUpdate(
      { _id: id },
      {
        phoneNumber: phoneNumber,
        password: hashedPassword,
      },
      {
        new: true,
        upsert: true,
      }
    );
    if (response !== null) {
      let token = jwt.sign({ id: response._id }, "thetuxedo");
      res.send({ status: 200, data: response, token: token });
    }
  } catch (error) {
    console.log(error.message);
  }
});

routesAddInfor.put("/addinfor", async (req, res, next) => {
  let token = req.headers.authorization;
  let name = req.body.name;
  let nickName = req.body.nickName;
  let gender = req.body.gender;
  let day = req.body.day;
  let month = req.body.month;
  let year = req.body.year;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  try {
    let id = jwt.verify(token, "thetuxedo").id;
    let response = await userModel.findOneAndUpdate(
      { _id: id },
      {
        name,
        nickName,
        gender,
        "birthDay.day": day,
        "birthDay.month": month,
        "birthDay.year": year,
        month,
        year,
        email,
        phoneNumber,
      },
      {
        new: true,
        upsert: true,
      }
    );
    if (response !== null) {
      let token = jwt.sign({ id: response._id }, "thetuxedo");
      res.send({ status: 200, data: response, token: token });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = routesAddInfor;
