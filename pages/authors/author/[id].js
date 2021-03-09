import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MainLayout from '../../../components/MainLayout'

export default function Author() {
  const router = useRouter()
  const [author, setAuthor] = useState({})
  const [isChanging, setIsChanging] = useState(true)
  const [changedName, setChangedName] = ''
  const [changedBirth, setChangedBirtg] = ''

  const authorHeaders = ['name', 'birth']

  useEffect(() => {
    async function loadAuthor() {
      const result = await fetch('http://localhost:3000/api/v1/authors/', { method: 'GET' })
      const authors = await result.json()

      setAuthor(authors.find((author) => author.id == router.query.id))
    }

    loadAuthor()
  }, [])

  function visualizeAuthorDetails() {
    // wait till book will be loaded
    if (author != undefined) {
      let authorKeys

      //without id
      authorKeys = Object.values(author).slice(1, Object.values(author).length)

      return authorHeaders.map((header, index) => {
        return (
          <div className='details_row'>
            <p className='details_header'>{header}</p>
            {isChanging ? (
              <input value={authorKeys[index]} onChange={set} />
            ) : (
              <p className='details_key'>{authorKeys[index]}</p>
            )}
          </div>
        )
      })
    }
  }

  function changeAuthorDetails() {
    if (isChanging) {
    }

    setIsChanging((prev) => !prev)
  }

  return (
    <MainLayout>
      <div className='details'>{visualizeAuthorDetails()}</div>

      {isChanging ? (
        <button className='btn btn-change' onClick={changeAuthorDetails}>
          OK
        </button>
      ) : (
        <button className='btn btn-change' onClick={changeAuthorDetails}>
          Change
        </button>
      )}
    </MainLayout>
  )
}
