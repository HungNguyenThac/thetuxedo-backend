const { NodeMailer } = require("../helper/mailer.helper");
const {
  compareBcrypt,
  signToken,
  createWithSocialNetwork,
  VerifyCodeFindOne,
  CodeVerifyCrypto,
  CreateVerifyCode,
  userModelChangePassword,
  deleteVerifyCode,
  updateVerifyCode,
  createWithSignup,
  hashedBcrypt,
  userModelFindOneLoginName,
  userModelFindOneEmail,
  userModelFindOnePhoneNumber,
  updatePassword,
} = require("../services/account.service");
const { MAX } = require("../constant/index");
const { userModelFindOneId } = require("../services/user.service");

exports.checkLoginWithLoginName = async (req, res, next) => {
  try {
    const { loginName, password } = req.body;
    console.log(25, loginName);
    const responseName = await userModelFindOneLoginName(loginName);
    if (responseName === null) {
      next();
    } else if (responseName !== null) {
      const match = await compareBcrypt(password, responseName);
      if (!match) {
        res.json({ status: 400, mess: "Sai mật khẩu", code: 306 });
      } else if (match) {
        let token = signToken(responseName);
        res.json({
          token: token,
          status: 200,
          user: responseName,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.checkLoginWithEmail = async (req, res) => {
  try {
    const { loginName, password } = req.body;
    const responseEmail = await userModelFindOneEmail(loginName);
    if (responseEmail === null) {
      res.json({ status: 400, mess: "Tài khoản không tồn tại!", code: 305 });
    } else if (responseEmail !== null) {
      const match = await compareBcrypt(password, responseEmail);
      if (!match) {
        res.json({ status: 400, mess: "Sai mật khẩu", code: 306 });
      } else if (match) {
        let token = signToken(responseEmail);
        res.json({
          token: token,
          status: 200,
          user: responseEmail,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.checkEmailLoginWithGG = async (req, res, next) => {
  try {
    const { email } = req.body;
    let response = await userModelFindOneEmail(email);
    if (response !== null) {
      let token = signToken(response);
      res.json({
        token: token,
        status: 200,
        user: response,
      });
    } else {
      next();
    }
  } catch (error) {
    res.json({ status: 400 });
  }
};

exports.createAccountWithGG = async (req, res) => {
  try {
    const { loginName, email, phoneNumber, name, avatar } = req.body;
    let response = await createWithSocialNetwork(
      loginName,
      email,
      phoneNumber,
      name,
      avatar
    );
    if (response !== null) {
      let token = signToken(response);
      res.json({
        token: token,
        status: 200,
        user: response,
      });
    } else if (response === null) {
      res.json({ status: 400 });
    }
  } catch (error) {
    res.json({ status: 400 });
  }
};

exports.postForgetPassword = async (req, res) => {
  try {
    const { email, loginName } = req.body;
    let responseName = await userModelFindOneLoginName(loginName);
    if (responseName === null) {
      res.json({ status: 400, mess: "Sai tên đăng nhập", code: 303 });
    } else if (responseName.email !== email) {
      res.json({ status: 400, mess: "Email không trùng khớp", code: 304 });
    } else if (responseName.email === email) {
      let response = await VerifyCodeFindOne(email);
      let verifyCode = CodeVerifyCrypto();
      if (!response) {
        let createVerifyCode = await CreateVerifyCode(email, verifyCode);
        if (!createVerifyCode) {
          res.json({
            status: 400,
            code: 305,
            mess: "Lỗi sever, vui lòng thử lại!",
          });
        }
        if (createVerifyCode) {
          const { email, code } = createVerifyCode;
          NodeMailer(email, code);
          res.json({ status: 200 });
        }
      }
      if (response) {
        let verifyCode = CodeVerifyCrypto();
        let responseVerifyCode = await updateVerifyCode(email, verifyCode);
        if (!responseVerifyCode) {
          res.json({
            status: 400,
            code: 305,
            mess: "Lỗi sever, vui lòng thử lại!",
          });
        }
        if (responseVerifyCode) {
          const { email, code } = responseVerifyCode;
          NodeMailer(email, code);
          res.json({ status: 200 });
        }
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({ status: 400, code: 305, mess: "Lỗi sever, vui lòng thử lại!" });
  }
};

exports.postChangePassword = async (req, res) => {
  try {
    const { email, password, codeVerify } = req.body;
    const responseUser = await VerifyCodeFindOne(email);
    if (!responseUser) {
      res.json({ status: 400, code: 401, mess: "Email không đúng!" });
    }
    if (responseUser.code !== codeVerify) {
      res.json({
        status: 400,
        code: 402,
        mess: "Sai mã xác thực chưa đúng!",
      });
    }
    if (responseUser.code === codeVerify) {
      const d = Date.now();
      const createdDate = responseUser.createdDate;
      if (d - createdDate > MAX.VERIFY_TIME) {
        res.json({
          status: 400,
          mess: "Mã xác thực đã hết hiệu lực!",
          code: 403,
        });
      } else {
        const hashedPassword = await hashedBcrypt(password);
        let response = await userModelChangePassword(email, hashedPassword);
        if (response) {
          await deleteVerifyCode(email);
          let token = signToken(response);
          res.json({
            token: token,
            status: 200,
            user: response,
            mess: "Bạn đã đổi mật khẩu thành công",
          });
        }
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.checkLoginNameSignup = async (req, res, next) => {
  try {
    const { loginName } = req.body;
    let response = await userModelFindOneLoginName(loginName);
    if (!response) {
      next();
    } else {
      res.json({
        status: 400,
        mess: "Tên tài khoản đã có người sử dụng",
        code: 300,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.checkEmailSignup = async (req, res, next) => {
  try {
    const { email } = req.body;
    let response = await userModelFindOneEmail(email);
    if (response === null) {
      next();
    } else {
      res.json({
        status: 400,
        mess: "Email đã có người sử dụng",
        code: 301,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.checkPhoneNumberSignup = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    let response = await userModelFindOnePhoneNumber(phoneNumber);
    if (response === null) {
      next();
    } else {
      res.json({
        status: 400,
        mess: "Số điện thoại đã có người sử dụng",
        code: 302,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.createAccountWithSighup = async (req, res) => {
  const { loginName, email, phoneNumber, password } = req.body;
  try {
    const hashedPassword = await hashedBcrypt(password);
    const response = await createWithSignup(
      loginName,
      email,
      phoneNumber,
      hashedPassword
    );
    if (response !== null) {
      res.json({ status: 200, mess: "Tạo tài khoản thành công" });
    } else {
      res.json({ status: 400, mess: "Một lỗi đã xảy ra!" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.updatePassword = async (req, res) => {
  const id = res.locals.id;
  const password = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  try {
    const responseUser = await userModelFindOneId(id);
    if (responseUser !== null) {
      const match = await compareBcrypt(password, responseUser);
      if (!match) {
        res.json({ status: 400, mess: "Mật khẩu hiện tại chưa đúng" });
      } else if (match) {
        const hashedPassword = await hashedBcrypt(newPassword);
        const response = await updatePassword(id, hashedPassword);
        if (response) {
          const token = signToken(response);
          res.json({
            token: token,
            status: 200,
            user: response,
            mess: "Bạn đã đổi mật khẩu thành công",
          });
        }
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.checkInfoUser = async (req, res) => {
  const id = res.locals.id;
  try {
    const response = await userModelFindOneId(id);
    if (response === null) {
      res.json({ status: 400 });
    } else if (response !== null) {
      if (response.password.length === 0) {
        res.json({ status: 200, code: 9527 });
      } else {
        res.json({ status: 200 });
      }
    }
  } catch (error) {
    res.json({ status: 400 });
  }
};
