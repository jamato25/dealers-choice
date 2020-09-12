import React from 'react'

const BookList = ({books,selectAuthor}) =>{
  return (
    <div>
    <h1>Books</h1>
      <ul>
      {books.map(book =>{
      return(
      <li key= {book.id} >
        <div>Title: {book.title}</div>
        <div>Description: {book.description}</div>
      </li>
      )})}
    </ul>
    <a href = {``}>Go Back</a>
    </div>

  )
}


export default BookList
