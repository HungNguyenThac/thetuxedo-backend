const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
const routesLogin = require("./routes/login");
const routesSignUp = require("./routes/signUp");
const routesForgetPassWord = require("./routes/forgetPassword");
const routesDashboard = require("./routes/dashboard");
const routesLoginWgg = require("./routes/loginWgg");
const routesGetData = require("./routes/getDataUser");
const routesAddInfor = require("./routes/addInfor");
const routesAddCart = require("./routes/addCart");
const routesAddBill = require("./routes/addbill");
const routesAddHistory = require("./routes/addHistory");
const routesChangePassword = require("./routes/changePassword");
var cors = require("cors");
const app = express();

const port = 9527;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/user", routesLogin);
app.use("/user", routesSignUp);
app.use("/user", routesGetData);
app.use("/user", routesAddInfor);
app.use("/user", routesAddBill);
app.use("/user", routesAddHistory);
app.use("/user", routesAddCart);
app.use("/user", routesLoginWgg);
app.use("/user", routesDashboard);
app.use("/user", routesForgetPassWord);
app.use("/user", routesChangePassword);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
