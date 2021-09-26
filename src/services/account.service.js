const bcrypt = require("bcrypt");
const VerifyCodeModel = require("../mongoose/codeVerify.model");
const userModel = require("../mongoose/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("bcryptjs");

exports.userModelFindOneLoginName = (loginName) => {
  try {
    return userModel.findOne({ loginName: loginName });
  } catch (error) {
    throw error;
  }
};

exports.userModelFindOneEmail = (email) => {
  try {
    return userModel.findOne({ email: email });
  } catch (error) {
    throw error;
  }
};

exports.userModelFindOnePhoneNumber = (phoneNumber) => {
  try {
    return userModel.findOne({ phoneNumber: phoneNumber });
  } catch (error) {
    throw error;
  }
};

exports.VerifyCodeFindOne = (email) => {
  try {
    return VerifyCodeModel.findOne({ email: email });
  } catch (error) {
    throw error;
  }
};

exports.signToken = (param) => {
  return jwt.sign({ id: param._id }, "thetuxedo");
};

exports.verifyToken = (token) => {
  return jwt.verify(token, "thetuxedo").id;
};

exports.createWithSocialNetwork = (
  loginName,
  email,
  phoneNumber,
  name,
  avatar
) => {
  try {
    return userModel.create({
      loginName,
      email,
      phoneNumber,
      name,
      avatar,
    });
  } catch (error) {
    throw error;
  }
};

exports.createWithSignup = (loginName, email, phoneNumber, hashedPassword) => {
  try {
    return userModel.create({
      loginName,
      email,
      phoneNumber,
      password: hashedPassword,
    });
  } catch (error) {
    throw error;
  }
};

exports.hashedBcrypt = (param = "") => {
  try {
    return bcrypt.hash(param, 10);
  } catch (error) {
    throw error;
  }
};

exports.CodeVerifyCrypto = () => {
  return crypto.randomBytes(4).toString("hex");
};

exports.CreateVerifyCode = (email = "", verifyCode = "") => {
  try {
    return VerifyCodeModel.create({
      email,
      code: verifyCode,
    });
  } catch (error) {
    throw error;
  }
};

exports.updateVerifyCode = (email = "", verifyCode = "") => {
  try {
    const time = Date.now();
    return VerifyCodeModel.useFindAndModify(
      { email },
      { code: verifyCode, createdDate: time },
      {
        new: true,
        upsert: true,
      }
    );
  } catch (error) {
    throw error;
  }
};

exports.userModelChangePassword = (email, hashedPassword) => {
  try {
    return userModel.useFindAndModify(
      { email: email },
      {
        password: hashedPassword,
      },
      {
        new: true,
        upsert: true,
      }
    );
  } catch (error) {
    throw error;
  }
};

exports.deleteVerifyCode = (email) => {
  try {
    return VerifyCodeModel.deleteOne({ email: email });
  } catch (error) {
    throw error;
  }
};

exports.compareBcrypt = (password, response) => {
  try {
    return bcrypt.compare(password, response.password);
  } catch (error) {
    throw error;
  }
};

exports.updatePassword = (id, hashedPassword) => {
  try {
    return userModel.useFindAndModify(
      { _id: id },
      {
        password: hashedPassword,
      },
      {
        new: true,
        upsert: true,
      }
    );
  } catch (error) {
    throw error;
  }
};
