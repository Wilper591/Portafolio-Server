const { Router } = require("express");
const router = Router();
const { enviarEmailNuevo } = require("../controllers/mailing.controller.js");
const {
  createReview,
  readReviews,
} = require("../controllers/tutorias.controller.js");

router.post("/sendEmail", enviarEmailNuevo);

router.post("/sendReview", createReview);

router.get("/getReviews", readReviews);

module.exports = router;
