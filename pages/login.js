import React from 'react'
import { getProviders, signIn } from "next-auth/react"

function login({providers}) {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img src="https://links.papareact.com/9xl" alt="" className="w-52 mb-5 object-contain" />

            {
                Object.values(providers).map((e) => (
                    <div key={e}>
                        <button onClick={() => signIn(e.id, {callbackUrl:"/"})}
                            className="bg-[#18D860] text-white rounded-md py-2 px-3 hover:bg-white hover:text-black">Login with {e.name}</button>
                    </div>  
                ))
            }
        </div>
    )
}

export default login

export async function getServerSideProps(){
    const providers = await getProviders();

    return{
        props:{
            providers,
        }
    }

}
