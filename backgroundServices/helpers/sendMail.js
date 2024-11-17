// const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");

// dotenv.config();

// function createTransporter(config) {
//   const transporter = nodemailer.createTransport(config);
//   return transporter;
// }

// let configrations = {
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   requireTLS: true,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// };

// const sendMail = async (messageOption) => {
//   const transporter = await createTransporter(configrations);
//   await transporter.verify();
//   await transporter.sendMail(messageOption, (error, info) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log(info.response);
//   });
// };
// module.exports = sendMail;

const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

function createTransporter(config) {
  const transporter = nodemailer.createTransport(config);
  return transporter;
}

let configurations = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const sendMail = async (messageOptions) => {
  try {
    const transporter = createTransporter(configurations);

    // Verify the transporter
    await transporter.verify();

    // Send the mail
    const info = await transporter.sendMail(messageOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
  }
};

module.exports = sendMail;
