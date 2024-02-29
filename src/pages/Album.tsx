import React from 'react'
import albumCover from '../assets/images/album-cover1.svg';
import { UserCircleIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import playBtn from '../assets/images/play-btn.svg'

function Album() {
    return (
        <div>
            {/* intro section  */}
            <div className='flex space-x-4 items-center'>
                <div>
                    <img src={albumCover} alt="" className='w-[237px]' />
                </div>
                <div className='text-white'>
                    <div className='text-xl font-sf-med'>Album</div>
                    <div className='text-6xl font-sf-bold mb-4'>The Names of God</div>
                    <div className='flex items-center space-x-2'>
                        <UserCircleIcon className='text-white w-6' />
                        <div className='text-base font-sf-reg'>Nathaniel Bassey | 2022 | 15 Songs</div>
                    </div>
                </div>
            </div>

            {/* control section  */}
            <div className='pt-10 flex flex-row space-x-6'>
                <img src={playBtn} alt="" className='w-[52px]' />
                <HeartIcon className='w-8 text-white' />
                <Squares2X2Icon className='w-8 text-white' />
            </div>

            {/* list section  */}
            <div></div>
        </div>
    )
}

export default Album