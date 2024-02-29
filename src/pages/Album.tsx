import React from 'react'
import albumCover from '../assets/images/album-cover1.svg';
import { UserCircleIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import playBtn from '../assets/images/play-btn.svg'
import { albumListData } from '../data/DummyData'

function Album() {
    return (
        <div>
            {/* intro section  */}
            <div className='flex space-x-4 items-center'>
                <div>
                    <img src={albumCover} alt="" className='w-[237px]' />
                </div>
                <div className='text-white'>
                    <div className='text-base sm:text-xl font-sf-med'>Album</div>
                    <div className='text-4xl sm:text-6xl font-sf-bold mb-4'>The Names of God</div>
                    <div className='flex items-center space-x-2'>
                        <UserCircleIcon className='text-white w-6' />
                        <div className='text-[12px] sm:text-base font-sf-reg'>Nathaniel Bassey | 2022 | 15 Songs</div>
                    </div>
                </div>
            </div>

            {/* control section  */}
            <div className='pt-10 flex flex-row space-x-6'>
                <img src={playBtn} alt="" className='w-10 sm:w-[52px]' />
                <HeartIcon className='w-8 text-white' />
                <Squares2X2Icon className='w-8 text-white' />
            </div>

            {/* list section  */}
            <div className='mt-10'>

                {
                    albumListData.map((items, i) => (
                        <div key={i} className='flex flex-row justify-between items-center mb-8 cursor-pointer'>
                            <div className='flex flex-row space-x-6 items-center'>
                                <div className='smallText'>{i+1}</div>
                                <div>
                                    <div className='smallText'>{items.title}</div>
                                    <div className='text-[#737373] text-base font-sf-reg'>{items.artist}</div>
                                </div>
                            </div>
                            <div className='smallText'>{items.duration}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Album