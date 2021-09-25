const express = require("express");
const { checkInfoUser } = require("../controllers/account.controller");
const routesUser = express.Router();
const {
  checkToken,
  getDataUser,
  addInfoUser,
  updateInfoUser,
  addbill,
  addHistory,
  addCart,
  updateAddress,
} = require("../controllers/user.controller");

routesUser.get("/getdata", checkToken, getDataUser);

routesUser.post("/addinfo", checkToken, addInfoUser);

routesUser.put("/updateinfouser", checkToken, updateInfoUser);

routesUser.put("/updateaddress", checkToken, updateAddress);

routesUser.put("/updatebill", checkToken, addbill);

routesUser.put("/updatehistorybill", checkToken, addHistory);

routesUser.post("/checkinfouser", checkToken, checkInfoUser);

routesUser.put("/updatecart", checkToken, addCart);

module.exports = routesUser;
