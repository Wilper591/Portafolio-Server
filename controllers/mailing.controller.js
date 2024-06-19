const { transporter } = require("../config/nodemailer.js");
const dotenv = require("dotenv").config();

const enviarEmailNuevo = async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  /* Enviar un mail a través del formulario */
  let mailOptions = {
    from: "Formulario Portafolio",
    to: process.env.CONTACT_EMAIL,
    subject: `Formulario Contacto: Remitente ${nombre} - Correo: ${email}`,
    html: mensaje,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error, el mail no se ha enviado: " + err);
      res.status(500).json({
        msg: "Error, el mail no se ha enviado: ",
        error: err.message,
      });
    } else {
      console.log("Email enviado correctamente: ", data);
      res.status(200).json({ msg: "Email enviado correctamente", data });
    }
  });
};

module.exports = { enviarEmailNuevo };
