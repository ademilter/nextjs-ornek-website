import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Ana sayfa</title>
      </Head>
      <h1 className="title">İlk web siteme hoş geldin!</h1>

      <style jsx>{``}</style>
    </Layout>
  )
}

export default HomePage
