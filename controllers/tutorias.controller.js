const { db } = require("../config/db.js");

const createReview = async (data) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO reviews (name, message) VALUES (?, ?);";
    db.execute(query, [data.nombre, data.mensaje], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = { createReview };
