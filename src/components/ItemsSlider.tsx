import React, { FunctionComponent, useRef, useState } from 'react';
import { sliderDisplayData } from '../data/DummyData';
import { SliderDisplayDataType } from '../types';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";


type ItemSliderProps = {
  title: string;
}

const ItemsSlider: FunctionComponent<ItemSliderProps> = ({title}) => {
  const sliderRef = useRef(null);
  const scrollAmount = 300;
  const [data, setData] = useState(sliderDisplayData)

  const leftScroll = () => {
    const container = sliderRef.current;
    // @ts-ignore 
    container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
  }

  const rightScroll = () => {
    const container = sliderRef.current;
    // @ts-ignore 
    container.scrollLeft += scrollAmount; // Scroll right by the specified amount
  }

  return (
    <div className='overflow-x-hidden'>
        <div className='flex items-center justify-between mb-4'>
          <div className='font-sf-bold text-xl'>{title}</div>

          <div className='flex items-center gap-3'>
            <div className='text-sm font-sf-reg border-[1px] border-white rounded-xl px-3 py-[2px] cursor-pointer'>More</div>
            <div className='flex items-center gap-2'>
              <span onClick={leftScroll}><IoIosArrowDropleft size={30} className='cursor-pointer'/></span>
              <span onClick={rightScroll}><IoIosArrowDropright size={30} className='cursor-pointer'/></span>
            </div>
          </div>
        </div>

        {/* slider here */}
        <div className=''>
          <div ref={sliderRef} className='flex items-center gap-4 overflow-x-auto no-scrollbar flex-nowrap scroll-smooth transition duration-300 ease-in-out'>
          {
            data.map((item: SliderDisplayDataType, i: number) => (
              <div className='min-w-[152px]' key={i}>
                <img src={item.image} alt="" className='w-[152px]' />
                <div className='font-sf-med text-sm text-white'>{item.title}</div>
                <div className='font-sf-med text-[10px] text-gray-400'>{item.artist}</div>
              </div>
            ))
          }
        </div>
        </div>
        
    </div>
  )
}

export default ItemsSlider