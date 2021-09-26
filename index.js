const express = require("./src/node_modules/express");
const bodyParser = require("./src/node_modules/body-parser");
const cookieParser = require("./src/node_modules/cookie-parser");
const app = express();
const cors = require("./src/node_modules/cors/lib");
const https = require("https");
const routesAccount = require("./src/routers/account.routes");
const routesUser = require("./src/routers/user.routes");
const path = require("path");

const port = 9527;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/account", routesAccount);
app.use("/user", routesUser);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Auto wake up heroku
app.get("/apis/wakeup-heroku", (req, res) => res.send("ok"));
const timer = 25 * 60 * 1000; // 25 minutes
setInterval(() => {
  https.get("https://thetuxedo.herokuapp.com/apis/wakeup-heroku");
}, timer);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
