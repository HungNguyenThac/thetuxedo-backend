const userModel = require("../mongoose/user.model.js");

exports.updateBill = (id, bill) => {
  try {
    return userModel.findOneAndUpdate(
      { _id: id },
      {
        bill: bill,
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

exports.updateCart = (id, cart) => {
  try {
    return userModel.findOneAndUpdate(
      { _id: id },
      {
        cart: cart,
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

exports.updateHistory = (id, history) => {
  try {
    return userModel.findOneAndUpdate(
      { _id: id },
      {
        history: history,
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

exports.addInfoUser = (id, phoneNumber, hashedPassword) => {
  try {
    return userModel.findOneAndUpdate(
      { _id: id },
      {
        phoneNumber: phoneNumber,
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

exports.updateInfoUser = (
  id,
  name,
  nickName,
  gender,
  day,
  month,
  year,
  email,
  phoneNumber
) => {
  try {
    return userModel.findOneAndUpdate(
      { _id: id },
      {
        name,
        nickName,
        gender,
        "birthDay.day": day,
        "birthDay.month": month,
        "birthDay.year": year,
        month,
        year,
        email,
        phoneNumber,
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

exports.userModelFindOneId = (id) => {
  try {
    return userModel.findOne({ _id: id });
  } catch (error) {
    throw error;
  }
};

exports.updateAddressUser = (id, address) => {
  try {
    return userModel.findOneAndUpdate(
      { _id: id },
      { address: address },
      {
        new: true,
        upsert: true,
      }
    );
  } catch (error) {
    throw error;
  }
};
