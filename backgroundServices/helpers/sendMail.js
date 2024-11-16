const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

function creatTransporter(config) {
  const transporter = nodemailer.createTransport(config);
  return transporter;
}

let configrations = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const sendMail = async (messageOption) => {
  const transporter = await createTransporter(configrations);
  await transporter.verify();
  await transporter.sendMail(messageOption, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log(info.response);
  });
};
module.exports = sendMail;
