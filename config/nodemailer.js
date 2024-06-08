const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

/* Con createTransport le paso a nodemalier mis credenciales */
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MI_MAIL,
    pass: process.env.MI_MAIL_PASSWORD,
    type: process.env.TYPE_MAIL,
    clientId: process.env.CLIENTE_ID,
    clientSecret: process.env.CLIENTE_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

module.exports = { transporter };
