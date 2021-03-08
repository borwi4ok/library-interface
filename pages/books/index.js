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
      cookie.set('books', json, { expires: 1 / 24 })
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

  return (
    <MainLayout>
      {console.log(1)}
      <table className='table' cellSpacing='0'>
        <tr className='table_header'>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Cover</th>
          <th>Cover color</th>
          <th>Cover image?</th>
          <th>Details</th>
        </tr>
        {books.map((book) => (
          <tr className='table_row'>
            <td>{book.name}</td>
            <td>{findAuthor(book.author)}</td>
            <td>{book.pages}</td>
            <td>{book.cover_type}</td>
            <td>{book.cover_color}</td>
            <td>{book.cover_image}</td>
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
    </MainLayout>
  )
}
