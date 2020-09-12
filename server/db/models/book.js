const Sequelize = require("sequelize")
const db = require('../db');

const Book = db.define('book',{
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: Sequelize.TEXT
})

module.exports = Book;
