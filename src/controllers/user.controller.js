const {
  verifyToken,
  hashedBcrypt,
  signToken,
} = require("../services/account.service");
const {
  userModelFindOneId,
  updateBill,
  updateCart,
  updateHistory,
  addInfoUser,
  updateInfoUser,
  updateAddressUser,
} = require("../services/user.service");

exports.getDataUser = async (req, res) => {
  const id = res.locals.id;
  try {
    let response = await userModelFindOneId(id);
    if (response !== null) {
      res.json({ status: 200, user: response });
    }
  } catch (error) {
    res.json({ status: 400 });
  }
};

exports.checkToken = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token === undefined || token.length === 0) {
    res.json({ status: 402, mess: "Token không hợp lệ" });
  } else if (token.length >= 1) {
    const id = verifyToken(token);
    const response = await userModelFindOneId(id);
    if (response === null) {
      res.json({ status: 400, mess: "Lỗi server, vui lòng thử lại sau" });
    } else {
      res.locals.id = id;
      next();
    }
  }
};

exports.addbill = async (req, res) => {
  const id = res.locals.id;
  const bill = req.body.bill;
  try {
    const response = await updateBill(id, bill);
    if (response !== null) {
      res.json({ status: 200, user: response });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.addCart = async (req, res) => {
  const id = res.locals.id;
  const cart = req.body.newCart;
  try {
    const response = await updateCart(id, cart);
    if (response !== null) {
      res.json({ status: 200, user: response });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.addHistory = async (req, res) => {
  const id = res.locals.id;
  const history = req.body.bill;
  try {
    const response = await updateHistory(id, history);
    if (response !== null) {
      res.json({ status: 200, user: response });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.addInfoUser = async (req, res) => {
  const id = res.locals.id;
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  try {
    const hashedPassword = await hashedBcrypt(password);
    const response = await addInfoUser(id, phoneNumber, hashedPassword);
    if (response !== null) {
      const token = signToken(response);
      res.json({ status: 200, user: response, token: token });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateInfoUser = async (req, res) => {
  const id = res.locals.id;
  const name = req.body.name;
  const nickName = req.body.nickName;
  const gender = req.body.gender;
  const day = req.body.day;
  const month = req.body.month;
  const year = req.body.year;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  try {
    const response = await updateInfoUser(
      id,
      name,
      nickName,
      gender,
      day,
      month,
      year,
      email,
      phoneNumber
    );
    if (response !== null) {
      const token = signToken(response);
      res.json({ status: 200, user: response, token: token });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateAddress = async (req, res) => {
  const id = res.locals.id;
  const address = req.body.address;
  try {
    const response = await updateAddressUser(id, address);
    if (response === null) {
      res.json({ status: 400 });
    } else if (response !== null) {
      const token = signToken(response);
      res.json({ status: 200, user: response, token: token });
    }
  } catch (error) {
    res.json({ status: 400 });
  }
};
