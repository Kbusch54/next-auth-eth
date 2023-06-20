import React from 'react'

interface Props {
    
}

const Header: React.FC<Props> = () => {
    return (
        <div className='flex flex-row justify-around text-blue-500 text-3xl'>
            <div><a href='/protected/client'>(Protected) client</a></div>
            <div><a href='/protected/server'>(Protected) Server</a></div>
        </div>
    )
}

export default Header
