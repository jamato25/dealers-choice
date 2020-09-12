const Sequelize = require("sequelize") //for things like Sequelize.STRING

//import your db
const db = require('../db');

//define your model
const Author = db.define('author',{
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})


//define any class or instance methods


//export your model

module.exports = Author;
