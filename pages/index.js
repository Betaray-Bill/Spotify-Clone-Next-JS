import Head from 'next/head'
import Sidebar from '../Components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Next Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
      </main>

      {/* Player */}

    </div>
  )
}
