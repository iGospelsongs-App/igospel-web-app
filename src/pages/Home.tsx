import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'

function Home() {
    const authCtx = useContext(AuthContext);

    return (
        <div className='text-white'>
            <div>one page is two page is  three page is four page is five page</div>
            <button onClick={() => authCtx.logout()}>logout</button>
        </div>
    )
}

export default Home