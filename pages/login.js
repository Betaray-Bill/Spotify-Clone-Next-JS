import React from 'react'
import { getProviders, signIn } from "next-auth/react"

function login() {
    return (
        <div>
            <img src="https://links.papareact.com/9xl" alt="" className="w-5 mb-5 object-contain" />

            {
                Object.values(providers).map((provider) => (
                    <div>
                        <button>Login with {provider.name}</button>
                    </div>
                ))
            }
        </div>
    )
}

export default login

export async function getServerSideProps(){
    const providers = await getProviders()

    return{
        props:{
            providers
        }
    }

}
