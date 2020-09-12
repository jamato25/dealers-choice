//import your db
const db = require('./db');
//import your models
const Author = require('./models/author')
const Book = require('./models/book')
//state your model associations (hasOne etc)
Author.hasMany(Book);
//export your db and Models (so they all can be imported from a single central location)



module.exports = {db, Author, Book}
