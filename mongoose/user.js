const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://nguyenthachung:hoagiaytranga9@cluster0.qaemv.mongodb.net/thetuxedo?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const userSchema = mongoose.Schema(
  {
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
    loginName: { type: String, default: "" },
    email: { type: String, default: "" },
    phoneNumber: { type: String, default: "" },
    password: { type: String, default: "" },
    updated: { type: Date, default: Date.now },
  },
  { collections: "profileUsers" }
);

const userModel = mongoose.model("profileUsers", userSchema);
module.exports = userModel;
