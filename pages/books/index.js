import { useState, useEffect } from 'react'
import Link from 'next/link'
import MainLayout from '../../components/MainLayout'
import cookie from 'js-cookie'

export default function Books() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    async function loadBooks() {
      const result = await fetch('http://localhost:3000/api/v1/books/', { method: 'GET' })
      const json = await result.json()
      setBooks(json)
    }

    async function loadAuthors() {
      const result = await fetch('http://localhost:3000/api/v1/authors/', { method: 'GET' })
      const json = await result.json()
      setAuthors(json)
    }
    loadBooks()
    loadAuthors()
  }, [])

  function findAuthor(id) {
    const author = authors.find((author) => author.id == id) || ''
    return author.name
  }

  function openAddingModalWindow() {}

  return (
    <MainLayout>
      {console.log(1)}
      <table className='table' cellSpacing='0'>
        <tr className='table_header'>
          <th>Title</th>
          <th>Author</th>
          <th>Details</th>
        </tr>
        {books.map((book, index) => (
          <tr className='table_row' key={index}>
            <td>{book.name}</td>
            <td>{findAuthor(book.author)}</td>
            <td>
              <Link href={'http://localhost:3000/books/book/' + book.id}>
                <a>
                  <div className='eyeIcon'></div>
                </a>
              </Link>
            </td>
          </tr>
        ))}
      </table>
      <button className='btn' onClick={openAddingModalWindow()}>
        Add
      </button>
    </MainLayout>
  )
}
