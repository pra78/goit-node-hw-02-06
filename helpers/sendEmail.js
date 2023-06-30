const nodemailer = require("nodemailer");
require("dotenv").config();

const { GMAIL_ADDRESS, GMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: GMAIL_ADDRESS,
    pass: GMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: GMAIL_ADDRESS };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
