import React from 'react'
import { albumMenuModalData } from '../../data/DummyData'
import m1 from '../../assets/images/m1.svg'

function AlbumMenuModal() {
    return (
        <div className='w-[243px] h-[336px] bg-[#0c0c0c] absolute top-[95%] left-[20%] sm:left-[12%] md:left-[9%] border-[1px] border-[#141414] rounded-[10px] p-5 space-y-5'>
            {
                albumMenuModalData.map((item, i) => (
                    <div className='flex flex-row items-center space-x-3 cursor-pointer'>
                        <img src={item.icon} alt="" className='w-[20px]' />
                        <div className='text-base font-sf-med text-white'>{item.title}</div>
                    </div>
                ))
            }

        </div>
    )
}

export default AlbumMenuModal