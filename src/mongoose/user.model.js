const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const URI = process.env.DATABASE_URL;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("err", err);
  });

const userSchema = mongoose.Schema({
  name: { type: String, default: "" },
  nickName: { type: String, default: "" },
  avatar: {
    type: String,
    default:
      "https://freepikpsd.com/media/2019/10/avatar-images-png-2-Images-PNG-Transparent.png",
  },
  gender: { type: String, default: "" },
  birthDay: {
    day: { type: String, default: "" },
    month: { type: String, default: "" },
    year: { type: String, default: "" },
  },
  address: Array,
  role: { type: String, default: "client" },
  cart: Array,
  bill: Array,
  history: Array,
  email: { type: String, default: "" },
  loginName: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  password: { type: String, default: "" },
  updated: { type: Date, default: Date.now },
});

const userModel = mongoose.model("profileUser", userSchema, "profileUser");
module.exports = userModel;
