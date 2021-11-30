import React from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atom/songAtom'
import useSpotify from '../hooks/useSpotify'
import { time } from './time'

function Song({order, track}) {

    const spotifyApi = useSpotify()

    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

    const playSong = () => {
        setCurrentTrackId(track.track.id);
        setIsPlaying(true)
        console.log("currentTrackId",currentTrackId);
        console.log(spotifyApi.play({
            uris:[track.track.uri],
        }))
    }
  return (
    <div className="grid grid-cols-4 justify-between space-y-8 py-2 cursor-pointer hover:bg-gray-800 rounded-md px-2 items-center content-center" onClick={playSong}>
        <div className="flex flex-grow items-center space-x-4"> 
            <p>{order+1}</p>
            <img 
                className="h-12 w-12 rounded-md"
                src={track.track.album.images[0].url} alt="" />
            <div>
                <p className="font-bold text-white truncate">{track.track.name.length > 20 ?  track.track.name.substring(0,20) +"..." : track.track.name}</p>
                <p className="font-normal opacity-60">{track.track.artists[0].name}</p>
            </div>
        </div>
        <div>
                <p className="hidden md:inline-flex opacity-60">{track.track.album.name}</p>
        </div>
        <div>
            <p className="hidden md:inline-flex opacity-60">{track?.added_at.substring(0,10)}</p>
        </div>
        <div>
            <p>{time(track.track.duration_ms)}</p>
        </div>
    </div>
  )
}

export default Song
