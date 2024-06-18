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
    db.end();
  });
};

const readReviews = async () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM reviews;";
    db.execute(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
    db.end();
  });
};

module.exports = { createReview, readReviews };
