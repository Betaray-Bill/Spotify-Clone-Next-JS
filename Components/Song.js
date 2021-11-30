import React from 'react'
import useSpotify from '../hooks/useSpotify'

function Song({order, track}) {

    const spotifyApi = useSpotify()

  return (
    <div className="grid grid-cols-4 justify-between space-y-8 items-center content-center">
        <div className="flex flex-grow items-center space-x-4"> 
            <p>{order+1}</p>
            <img 
                className="h-10 w-10"
                src={track.track.album.images[0].url} alt="" />
            <div>
                <p className="font-bold">{track.track.name}</p>
                <p className="font-normal opacity-60">{track.track.artists[0].name}</p>
            </div>
        </div>
        <div>
                <p className="hidden md:inline-flex">{track.track.album.name}</p>
        </div>
        <div>
            <p className="hidden md:inline-flex">{track?.added_at.substring(0,10)}</p>
        </div>
        <div>
            <p>duration</p>
        </div>
    </div>
  )
}

export default Song
