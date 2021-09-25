const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
exports.NodeMailer = async (email, codeVerify) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Nguyễn Thạc Hưng ",
    to: email,
    subject: "The Tuxedo",
    text: "Mã xác thực!!",
    html: `<div>
    <h1>Mã đổi mật khẩu của bạn: ${codeVerify}</h1>
    <h3>Mã xác thực sẽ có hiệu lực trong 10 phút!</h3>
    </div>`,
  });
};
