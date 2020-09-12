import React from 'react'

const AuthorList = ({authors}) =>{
  const authorList = authors.map(author => <li key = {author.id} href={`#${author.id}`}> {author.name}</li>)
  return (
    <div>
      <h1>Authors</h1>
      <ul>
      {authors.map(author =>
      <li key = {author.id} >
        <a href={`#${author.id}`}>
          {author.name}
        </a>

      </li>)}

      </ul>
    </div>
  )
}

export default AuthorList
