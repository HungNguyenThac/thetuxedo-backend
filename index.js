const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const routesAccount = require("./src/routers/account.routes");
const routesUser = require("./src/routers/user.routes");
// const corsCongif = require("./src/configs/cors.configs");

// app.use(cors(corsCongif));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/account", routesAccount);
app.use("/user", routesUser);

// set port change deploy heroku
// const port = 9527;
const port = process.env.PORT || 9527;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
