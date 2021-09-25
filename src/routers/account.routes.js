const express = require("express");
const routesAccount = express.Router();
const {
  checkLoginWithEmail,
  checkEmailLoginWithGG,
  createAccountWithGG,
  postForgetPassword,
  postChangePassword,
  checkLoginNameSignup,
  checkEmailSignup,
  checkPhoneNumberSignup,
  createAccountWithSighup,
  updatePassword,
  checkLoginWithLoginName,
} = require("../controllers/account.controller");
const { checkToken } = require("../controllers/user.controller");

routesAccount.post("/login", checkLoginWithLoginName, checkLoginWithEmail);

routesAccount.post(
  "/loginSocialNetwork",
  checkEmailLoginWithGG,
  createAccountWithGG
);

routesAccount.post("/updatePassword", checkToken, updatePassword);

routesAccount.post("/forgot", postForgetPassword);

routesAccount.post("/changepasswords", postChangePassword);

routesAccount.post(
  "/signup",
  checkLoginNameSignup,
  checkEmailSignup,
  checkPhoneNumberSignup,
  createAccountWithSighup
);

module.exports = routesAccount;
