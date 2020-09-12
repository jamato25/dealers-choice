const express = require("express")
//initialize app
const app = express();
const morgan = require('morgan')
const {join}= require('path')

//require morgan|volleyball, path packages
//require db from /db

const {db,Author,Book} = require('./db')

//use morgan|volleyball
app.use(morgan('dev'));

//use express.json()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use(express.static(join(__dirname, './public')))

//require in your routes and use them on your api path
app.use('/',require('./routes'))
//404 handler

//500 handler

//set PORT
const PORT = 3050;
//listen

const init = async function(){
  await db.sync({force:true});
  Author.create({
    name: 'Ernest Hemmingway'
  })

  Author.create({
    name: 'JK Rowling'
  })

  Author.create({
    name: 'Malcolm Gladwell'
  })

  Author.create({
    name: 'Michael Pollan'
  })

  Book.create({
    title: 'The Sun Also Rises',
    description: 'A Book about the Lost Generation',
    authorId: 1
  })

  Book.create({
    title: 'Harry Potter and the Sorcerers Stone',
    description: 'HP #1',
    authorId: 2
  })

  Book.create({
    title: 'Harry Potter and the Chamber of Secrets',
    description: 'HP #2',
    authorId: 2
  })
  Book.create({
    title: 'Harry Potter and the Prisoner of Azkaban',
    description: 'HP#3',
    authorId: 2
  })

  Book.create({
    title: 'For Whom the Bell Tolls',
    description: 'Another Book about the Lost Generation',
    authorId: 1
  })

  Book.create({
    title: 'Outliers',
    description: 'A Book about successful people',
    authorId: 3
  })

  Book.create({
    title: 'Talking to Strangers',
    description: 'A great audiobook',
    authorId: 3
  })

  Book.create({
    title: 'The Omnivores Dilemma',
    description: 'A Book about food',
    authorId: 4
  })

  Book.create({
    title: 'The Botany of Desire',
    description: 'A Book about plants',
    authorId: 4
  })



  app.listen(PORT, ()=>{
  console.log(`listening on Port ${PORT}`)
  })
}

init();

