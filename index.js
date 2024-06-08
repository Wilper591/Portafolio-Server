const { enviarEmailNuevo } = require("./controllers/mailingController");
const dotenv = require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      // El origen del Request esta permitido
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.post("/sendEmail", (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    const respuestaEmail = enviarEmailNuevo(
      `Formulario Contacto: Remitente ${nombre} - Correo: ${email}`,
      mensaje
    );
    res.status(200).json({ msg: "Email enviado correctamente" });
  } catch (error) {
    const err = new Error("Error al Enviar Correo");
    res.status(500).json({ msg: err.message });
  }
});

app.listen(PORT, () => {
  console.log(
    `SERVIDOR LEVANTANDO EN EL PUERTO: ${PORT} - PID: ${process.pid}`
  );
});
