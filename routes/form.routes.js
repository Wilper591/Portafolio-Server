const { Router } = require("express");
const router = Router();
const { enviarEmailNuevo } = require("../controllers/mailingController.js");
const { createReview } = require("../controllers/tutorias.controller.js");

router.post("/sendEmail", (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    enviarEmailNuevo(
      `Formulario Contacto: Remitente ${nombre} - Correo: ${email}`,
      mensaje
    );
    res.status(200).json({ msg: "Email enviado correctamente" });
  } catch (error) {
    const err = new Error("Error al Enviar Correo");
    res.status(500).json({ msg: err.message });
  }
});

router.post("/sendReview", (req, res) => {
  try {
    createReview(req.body);
    res.status(200).json({ msg: "Reseña Creada Correctamente" });
  } catch (error) {
    const err = new Error("Error al Enviar Reseña");
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
