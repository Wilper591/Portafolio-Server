const Sequelize = require("sequelize");
const db = require("../config/db.js");

const Review = db.define("reviews", {
  name: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  },
});

module.exports = Review;
