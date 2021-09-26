const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const https = require("https");
const routesAccount = require("./src/routers/account.routes");
const routesUser = require("./src/routers/user.routes");
const path = require("path");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/account", routesAccount);
app.use("/user", routesUser);

app.use(express.static(path.join(__dirname, "app/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Auto wake up heroku
app.get("/apis/wakeup-heroku", (req, res) => res.send("ok"));
const timer = 25 * 60 * 1000; // 25 minutes
setInterval(() => {
  https.get("https://thetuxedo.herokuapp.com/apis/wakeup-heroku");
}, timer);

const port = process.env.PORT || 9725;
app.listen(port);
