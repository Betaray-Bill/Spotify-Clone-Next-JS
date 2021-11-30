import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { useEffect } from 'react'
import Center from '../Components/Center'
import Player from '../Components/Player'
import Sidebar from '../Components/Sidebar'
import { LOGIN_URL } from '../lib/spotify'

export default function Home() {

  useEffect(() => {
    console.log("LOGIN_URL",LOGIN_URL)
  }, [LOGIN_URL])


  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Next Clone</title>
        <link rel="icon" href="https://links.papareact.com/9xl" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      {/* Player */}
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  )
}


export async function getServerSideProps(context){
  const session = await getSession(context)

  return {
    props:{
      session
    }
  }
}