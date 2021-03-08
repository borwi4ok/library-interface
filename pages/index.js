import Head from 'next/head'
import MainLayout from '../components/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Library</title>
      </Head>
      <div>Home page</div>
    </MainLayout>
  )
}
