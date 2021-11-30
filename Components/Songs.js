import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistAtomState } from '../atom/playlistAtom'
import Song from './Song'

function Songs() {
    const playlist = useRecoilValue(playlistAtomState)
    console.log(playlist?.tracks.items)
  return (
    <div className="text-white flex flex-col space-y-1 pb-20">
        <div className="grid grid-cols-3">
        <div className="flex flex-grow items-center space-x-4"> 
            <p>#</p>
            <h3>Title</h3>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
        <div>
                <p className="hidden md:inline-flex">Album</p>
                <p>duration</p>
        </div>
        <div>
            <p className="hidden md:inline-flex">Added at</p>
        </div>
    </div>
      {
          playlist?.tracks.items.map((track, i) => (
              <Song key={track.track.id} track={track} order={i}/>
          ))
      }
    </div>
  )
}

export default Songs
