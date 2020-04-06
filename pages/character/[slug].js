import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import React from 'react'
import { useRouter } from 'next/router'

function CharacterDetail({}) {
  const router = useRouter()
  const { slug } = router.query

  const id = slug.split('-').slice(-1)[0]

  const [character, setCharacter] = React.useState(null)

  React.useEffect(() => {
    getCharacter()
  }, [])

  const getCharacter = async () => {
    const data = await unfetch(
      'https://rickandmortyapi.com/api/character/' + id
    )
    const character = await data.json()
    setCharacter(character)
  }

  return (
    <Layout>
      <Head>
        <title>Ana sayfa</title>
      </Head>

      {character ? (
        <div>
          <h1>{character.name}</h1>

          <figure>
            <img src={character.image} alt={character.name} />
          </figure>
        </div>
      ) : (
        <div>Yükleniyor</div>
      )}
    </Layout>
  )
}

export default CharacterDetail
