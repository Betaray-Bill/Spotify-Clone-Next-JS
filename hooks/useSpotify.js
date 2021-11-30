import React, { useState, useEffect }  from 'react'
import { useSession, signIn  } from 'next-auth/react'
import spotifyApi from "../lib/spotify"
import SpotifyWebApi from "spotify-web-api-node"

const spotifyAPI = new SpotifyWebApi({
    clientId: process.env.NEXTPUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXTPUBLIC_CLIENT_SECRET
})

function useSpotify() {

    const { data:session, status } = useSession()
    useEffect(() => {
        if(session){
            if(session.error === 'RefreshAccessTokenError'){
                signIn()
            }

            spotifyApi.setAccessToken(session.user.accessToken)
        }
    }, [session])

  return spotifyApi
}

export default useSpotify
