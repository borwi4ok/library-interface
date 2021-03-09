import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MainLayout from '../../../components/MainLayout'

export default function Book() {
  const router = useRouter()

  const [book, setBook] = useState({})
  const [authors, setAuthors] = useState([])

  const bookHeaders = ['name', 'author', 'pages', 'cover type', 'cover color', 'cover image']

  useEffect(() => {
    async function loadBook() {
      const result = await fetch('http://localhost:3000/api/v1/books/')
      const books = await result.json()
      const book = books.find((book) => book.id == router.query.id)
      setBook(book)
    }

    async function loadAuthors() {
      const result = await fetch('http://localhost:3000/api/v1/authors/', { method: 'GET' })
      const json = await result.json()
      setAuthors(json)
    }

    loadBook()
    loadAuthors()
  }, [])

  function findAuthor(id) {
    const author = authors.find((author) => author.id == id) || ''
    return author.name
  }

  function visualizeBookDetails() {
    // wait till book will be loaded
    if (book != undefined) {
      let authorIndex = 0,
        bookKeys

      //without id
      bookKeys = Object.values(book).slice(1, Object.values(book).length)

      authorIndex = bookHeaders.findIndex((key) => key == 'author')

      bookKeys[authorIndex] = findAuthor(bookKeys[authorIndex])

      return bookHeaders.map((header, index) => {
        return (
          <div className='details_row'>
            <p className='details_header'>{header}</p>
            <p className='details_key'>{bookKeys[index]}</p>
          </div>
        )
      })
    }
  }

  return (
    <MainLayout>
      <div className='details'>{visualizeBookDetails()}</div>
    </MainLayout>
  )
}
