const dotenv = require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const rutasForm = require("./routes/form.routes.js");

const PORT = process.env.PORT || 3000;

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", rutasForm);

app.listen(PORT, () => {
  console.log(
    `SERVIDOR LEVANTANDO EN EL PUERTO: ${PORT} - PID: ${process.pid}`
  );
});
