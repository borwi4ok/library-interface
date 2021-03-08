import Link from 'next/link'
import styles from '../styles/MainLayout.module.css'

export default function MainLayout({ children }) {
  return (
    <>
      <nav className={styles.header}>
        <Link href='/'>
          <a className={styles.header_item}>Home</a>
        </Link>
        <Link href='/books'>
          <a className={styles.header_item}>Books</a>
        </Link>
        <Link href='/authors'>
          <a className={styles.header_item}>Authors</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  )
}
