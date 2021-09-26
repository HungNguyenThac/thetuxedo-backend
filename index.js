const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const https = require("https");
const routesAccount = require("./src/routers/account.routes");
const routesUser = require("./src/routers/user.routes");
const corsConfig = require("./src/configs/cors.configs");
const path = require("path");

app.use(cors(corsConfig));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/account", routesAccount);
app.use("/user", routesUser);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
  const index = path.join(__dirname, "build", "index.html");
  res.sendFile(index);
});

// Auto wake up heroku
app.get("/apis/wakeup-heroku", (req, res) => res.send("ok"));
const timer = 25 * 60 * 1000; // 25 minutes
setInterval(() => {
  https.get("https://thetuxedo-dev.herokuapp.com/apis/wakeup-heroku");
}, timer);

const port = process.env.PORT || 9725;
app.listen(port);
