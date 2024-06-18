const Review = require("../models/Review.js");

const createReview = async (req, res) => {
  const { nombre, mensaje } = req.body;
  try {
    await Review.create({ name: nombre, message: mensaje });
    res.status(200).json({ msg: "Reseña Creada Correctamente" });
  } catch (error) {
    const err = new Error("Error al Enviar Reseña");
    res.status(500).json({ msg: err.message });
  }
};

const readReviews = async (req, res) => {
  try {
    const results = await Review.findAll();
    res.status(200).json({
      msg: "Reseñas Obtenidas con exito",
      resultado: results,
    });
  } catch (error) {
    const err = new Error("Error al Buscar Reseñas");
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { createReview, readReviews };
