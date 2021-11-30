import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import { shuffle } from "lodash"
import { useRecoilValue , useRecoilState} from 'recoil'
import { playlistAtomState, playlistIdState } from '../atom/playlistAtom'
import useSpotify from '../hooks/useSpotify'
import Songs from './Songs'


function Center() {

    const playlistId = useRecoilValue(playlistIdState)
    const [playlist, setPlaylist] = useRecoilState(playlistAtomState)


    const { data:session } = useSession()
    const spotifyApi = useSpotify()
    const colors = [
      "from-indigo-500",
      "from-blue-500",
      "from-orange-500",
      "from-pink-500",
      "from-green-500",
      "from-red-500",
      "from-purple-500",
    ]
    const [color, setColor] = useState(null)

    useEffect(() => {
      setColor(shuffle(colors).pop())
    }, [playlistId])

    useEffect(() => {
      spotifyApi.getPlaylist(playlistId).then((data => {
        setPlaylist(data.body)
      }))
    }, [playlistId])

  return (
    <div className="flex-grow text-white overflow-y-scroll h-screen scrollbar-hide">
      <header className="absolute top-5 right-8">  
          <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
              <img src={session?.user.image} alt="" className="rounded-full w-10 h-10"/>
              <h2>{session?.user.name}</h2>
              <ChevronDoubleDownIcon className="h-5 w-5"/>
          </div>
      </header>

      <section className={`flex items-end w-full h-80 space-x-7 bg-gradient-to-b to-black ${color} text-white p-8`}>
        <img src={playlist?.images?.[0]?.url} alt="" className="h-44 w-44 shadow-2xl"/>
        <div>
          <h1>PLAYLIST</h1>
          <h2 className="text-xl md:text-3xl xl:text-5xl font-bold ">{playlist?.name}</h2>
        </div>
      </section>

      <div className="space-x-8 pl-8 pr-8 ">
        <Songs />
      </div>
    </div>
  )
}

export default Center
