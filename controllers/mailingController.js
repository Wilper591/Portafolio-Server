const { transporter } = require("../config/nodemailer");


const enviarEmailNuevo = (subject, content) => {
  /* Enviar un mail a través del formulario */
  let mailOptions = {
    from: "Formulario Portafolio",
    to: process.env.CONTACT_EMAIL,
    subject,
    html: content,
  };
console.log(mailOptions);
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error, el mail no se ha enviado: " + err);
      return {
        msg: "Error, el mail no se ha enviado: " + err,
        error: err.message,
      };
    } else {
      console.log("Email enviado correctamente", data);
      return { msg: "Email enviado correctamente", data, error: err.message };
    }
  });
};

module.exports = { enviarEmailNuevo };
