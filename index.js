const { enviarEmailNuevo } = require("./controllers/mailingController");
const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/sendEmail", (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    const respuestaEmail = enviarEmailNuevo(
      `Formulario Contacto: Remitente ${nombre} - Correo: ${email}`,
      mensaje
    );
    res.status(200).json(respuestaEmail);
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
});

app.listen(PORT, () => {
  console.log(
    `SERVIDOR LEVANTANDO EN EL PUERTO: ${PORT} - PID: ${process.pid}`
  );
});
