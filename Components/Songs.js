import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistAtomState } from '../atom/playlistAtom'
import Song from './Song'

function Songs() {
    const playlist = useRecoilValue(playlistAtomState)
    console.log(playlist?.tracks.items)
  return (
    <div className="text-white flex flex-col space-y-1 pb-20">
        <div className="grid grid-cols-4 text-white opacity-70 py-8 text-lg">
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
            </div>
            <div>
                <p className="hidden md:inline-flex">Added at</p>
            </div>
            <div>
                <p>Duration</p>
            </div>
        </div>

        <hr className="border-1 opacity-30 "/>

        <div className="mt-8">
            {
                playlist?.tracks.items.map((track, i) => (
                    <Song key={track.track.id} track={track} order={i}/>
                ))
            }
        </div>

    </div>
  )
}

export default Songs
