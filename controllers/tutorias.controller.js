const { db } = require("../config/db.js");

const createReview = async (data) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO reviews (name, message) VALUES (?, ?);";
    db.execute(query, [data.nombre, data.mensaje], (error, results) => {
      if (error) {
        db.end((endError) => {
          if (endError) {
            return reject(endError);
          }
          return reject(error);
        });
      } else {
        db.end((endError) => {
          if (endError) {
            return reject(endError);
          }
          resolve(results);
        });
      }
    });
  });
};

const readReviews = async () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM reviews;";
    db.execute(query, (error, results) => {
      if (error) {
        db.end((endError) => {
          if (endError) {
            return reject(endError);
          }
          return reject(error);
        });
      } else {
        db.end((endError) => {
          if (endError) {
            return reject(endError);
          }
          resolve(results);
        });
      }
    });
  });
};

module.exports = { createReview, readReviews };
