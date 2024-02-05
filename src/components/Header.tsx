import React from 'react'
import searchIcon from '../assets/images/search.svg'
import notifIcon from '../assets/images/notif.svg'
import dp from '../assets/images/dp.svg'

function Header() {
  return (
    <div className='flex items-center justify-between pr-7 gap-2'>
        {/* search bar */}
        <div className='flex-1'>
            <div className='flex max-w-[300px] items-center border-[1px] border-[#98A2B3] bg-white bg-opacity-5 px-2 py-[5px] rounded-lg'>
                <img src={searchIcon} alt="" className='w-[14px] mr-1' />
                <input type="text" className='outline-none text-xs w-full font-sf-reg bg-transparent text-white' placeholder='Search songs, albums, artists, sermons' />
            </div>
        </div>

        <div className='flex items-center gap-4'>
            {/* notification icon    */}
            <div>
                <img src={notifIcon} alt="" className='w-8' />
            </div>
            {/* profile icon  */}
            <div>
                <img src={dp} alt="" className='w-8' /> 
            </div>
        </div>
    </div>
  )
}

export default Header