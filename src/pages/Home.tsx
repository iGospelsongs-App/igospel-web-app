import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'

function Home() {
    const authCtx = useContext(AuthContext);

    return (
        <div className='text-white'>
            <div>home page</div>
            <button onClick={() => authCtx.logout()}>logout</button>
        </div>
    )
}

export default Home