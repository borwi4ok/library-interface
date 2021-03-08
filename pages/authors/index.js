import { useState, useEffect } from 'react'
import MainLayout from '../../components/MainLayout'

export default function Authors() {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    async function loadAuthors() {
      const result = await fetch('http://localhost:3000/api/v1/authors/')
      const json = await result.json()
      setAuthors(json)
    }
    loadAuthors()
  }, [])

  return (
    <MainLayout>
      <table className='table' cellSpacing='0'>
        <tr className='table_header'>
          <th>Name</th>
          <th>Birth</th>
        </tr>
        {authors.map((author) => (
          <tr className='table_row'>
            <td>{author.name}</td>
            <td>{author.birth}</td>
            {/* <td>
              <Link href={'http://localhost:3000/authors/author/' + author.id}>
                <a>
                  <div className='eyeIcon'></div>
                </a>
              </Link>
            </td> */}
          </tr>
        ))}
      </table>
    </MainLayout>
  )
}
