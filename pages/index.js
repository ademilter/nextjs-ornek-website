import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Ana sayfa</title>
      </Head>
      <h1 className="title">İlk web siteme hoş geldin!</h1>

      <ul>
        {characters.results.map(character => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{``}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    props: {
      characters
    }
  }
}

export default HomePage
