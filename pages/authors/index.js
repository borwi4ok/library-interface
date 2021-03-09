import { useState, useEffect } from 'react'
import Link from 'next/link'
import MainLayout from '../../components/MainLayout'

export default function Authors() {
  const [authors, setAuthors] = useState([])
  const [isShowModalWindow, setIsShowModalWindow] = useState(false)
  const [newAuthorsName, setNewAuthorsName] = useState('')
  const [newAuthorsBirth, setNewAuthorsBirth] = useState('')

  useEffect(() => {
    async function loadAuthors() {
      const result = await fetch('http://localhost:3000/api/v1/authors/', { method: 'GET' })
      const json = await result.json()
      setAuthors(json)
    }
    loadAuthors()
  }, [])

  async function createNewAuthor() {
    const result = await fetch('http://localhost:3000/api/v1/authors/', {
      method: 'POST',
      body: JSON.stringify({ name: newAuthorsName, birth: newAuthorsBirth }),
    })
    const json = await result.json()
    setAuthors(json)
  }

  function openAddingModalWindow() {
    return (
      <div className='modalAddContainer'>
        <div className='modalAddWindow'>
          <div className='modalAddWindow-input'>
            <label htmlFor='name'>Name</label>
            <input id='name' onChange={(event) => setNewAuthorsName(event.target.value)} />
          </div>

          <div className='modalAddWindow-input'>
            <label htmlFor='birth'>Birth</label>
            <input id='birth' onChange={(event) => setNewAuthorsBirth(event.target.value)} />
          </div>

          <div className='modalAddWindow-btns'>
            <button className='btn' onClick={createNewAuthor}>
              Add
            </button>
            <button className='btn' onClick={() => setIsShowModalWindow(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <MainLayout>
      <table className='table' cellSpacing='0'>
        <tr className='table_header'>
          <th>FullName</th>
          <th>Birth</th>
          <th>Details</th>
        </tr>
        {authors.map((author, index) => (
          <tr className='table_row' key={index}>
            <td>{author.name}</td>
            <td>{author.birth}</td>
            <td>
              <Link href={'http://localhost:3000/authors/author/' + author.id}>
                <a>
                  <div className='eyeIcon'></div>
                </a>
              </Link>
            </td>
          </tr>
        ))}
      </table>
      <button className='btn btn-modal' onClick={() => setIsShowModalWindow(true)}>
        Add
      </button>
      {isShowModalWindow ? openAddingModalWindow() : <></>}
    </MainLayout>
  )
}
