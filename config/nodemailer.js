const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

/* Con createTransport le paso a nodemalier mis credenciales */
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MI_MAIL,
    pass: process.env.MI_MAIL_PASSWORD,
  },
});

module.exports = { transporter };
