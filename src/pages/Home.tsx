import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import ItemsSlider from '../components/ItemsSlider';

function Home() {
    const authCtx = useContext(AuthContext);

    return (
        <div className='text-white'>
            <ItemsSlider title="Recommended albums" />
            <br /><br />
            <button onClick={() => authCtx.logout()}>logout</button>
        </div>
    )
}

export default Home