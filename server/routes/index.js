const router = require("express").Router()
const path = require('path')
//import models from /db
const {db, Author, Book} = require('../db/index')


//routes go here

router.get('/api/authors', async (req,res,next)=>{
  try{
    let response = await Author.findAll({include: Book})
    res.send(response)
  }
  catch(err){
    next(err)
  }
})



router.get('/author/:id', async(req,res,next)=>{
  try{
    let response = await Book.findAll({
      where:{
        authorId: req.params.id
    }})
    res.send(response);
  }

  catch(err){
    next(err);
  }
})


module.exports = router
