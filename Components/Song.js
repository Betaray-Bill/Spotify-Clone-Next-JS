import React from 'react'
import useSpotify from '../hooks/useSpotify'

function Song({order, track}) {

    const spotifyApi = useSpotify()

  return (
    <div className="grid grid-cols-3">
        <div className="flex flex-grow items-center space-x-4"> 
            <p>{order+1}</p>
            <img 
                className="h-10 w-10"
                src={track.track.album.images[0].url} alt="" />
            <div>
                <p>{track.track.name}</p>
                <p>{track.track.artists[0].name}</p>
            </div>
        </div>
        <div>
                <p className="hidden md:inline-flex">{track.track.album.name}</p>
                <p>duration</p>
        </div>
        <div>
            <p className="hidden md:inline-flex">{track?.added_at}</p>
        </div>
    </div>
  )
}

export default Song
