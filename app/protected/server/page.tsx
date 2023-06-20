// import { getServerSession } from 'next-auth'
import { authOptions,getServerSession } from '../../api/auth/[...nextauth]/route'
import React from 'react'
import { redirect } from 'next/navigation';
import SignOut from '@/app/components/signOut';
interface Props {
    
}

const ProtectedServerPage = async() => {
    const session = await getServerSession();
    if(!session) {
        console.log('no session', session)
        redirect('/auth/signin?callbackUrl=/protected/server')
    }
    return (
        <div>
        This page is Protected for special people. like
        {JSON.stringify(session.user?.name, null, 2)}
        <SignOut/>
      </div>
    )
}

export default ProtectedServerPage
