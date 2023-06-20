'use client'
import React from 'react'
import { signOut as signOutAuth } from "next-auth/react";
import { redirect } from 'next/navigation';

interface Props {
    
}

const SignOut: React.FC<Props> = () => {
    return (
        <div>
            <button onClick={()=>signOutAuth({callbackUrl:'localhost:3001/auth/signin?callbackUrl=localhost:3001/protected/client'
            })}>logout</button>
        </div>
    )
}

export default SignOut
