import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MainLayout from '../../../components/MainLayout'

export default function Book() {
  const router = useRouter()

  const [book, setBook] = useState({})

  useEffect(() => {
    async function loadBook() {
      const result = await fetch('http://localhost:3000/api/v1/books/')
      const books = await result.json()
      const book = books.find((book) => book.id == router.query.id)
      setBook(book)
    }

    loadBook()
  }, [])

  return (
    <MainLayout>
      <div>book page{JSON.stringify(book)}</div>
    </MainLayout>
  )
}
