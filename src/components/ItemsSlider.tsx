//created this scroll slider with reference from https://dev.to/aneeqakhan/building-an-image-slider-with-smooth-scrolling-using-react-1jdb

import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { SliderDisplayDataType } from '../types';
import greyarrow from '../assets/images/greyarrow.svg';
import whitearrow from '../assets/images/whitearrow.svg';

type ItemSliderProps = {
  title: string;
  sliderData: SliderDisplayDataType[];
}

const ItemsSlider: FunctionComponent<ItemSliderProps> = ({title, sliderData}) => {
  const sliderRef = useRef(null);
  const scrollAmount = 300;
  const [data, setData] = useState<SliderDisplayDataType[]>(sliderData);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = sliderRef.current as HTMLElement | null;
      if (container) {
        setIsLeftDisabled(container.scrollLeft === 0);
        setIsRightDisabled(container.scrollLeft >= container.scrollWidth - container.clientWidth);
      }
    };
    
    const container = sliderRef.current as HTMLElement | null;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const leftScroll = () => {
    const container = sliderRef.current as HTMLElement | null;
    if(container) {
      container.scrollLeft -= scrollAmount; 
    }
  }

  const rightScroll = () => {
    const container = sliderRef.current as HTMLElement | null;
    if(container) {
      container.scrollLeft += scrollAmount; 
    }
  }

  return (
    <div className='overflow-x-hidden'>
        <div className='flex items-center justify-between mb-4'>
          <div className='font-sf-bold text-xl'>{title}</div>

          <div className='flex items-center gap-3'>
            <div className='text-sm font-sf-reg border-[1px] border-white rounded-xl px-3 py-[2px] cursor-pointer'>More</div>
            <div className='flex items-center gap-2'>
              {isLeftDisabled ? <img src={greyarrow} className='rotate-180' alt="" /> : <img src={whitearrow} alt="" className='rotate-180 cursor-pointer' onClick={leftScroll} />}
              {isRightDisabled ? <img src={greyarrow} className='rotate-180' alt="" /> : <img src={whitearrow} className='cursor-pointer' alt="" onClick={rightScroll} />}
              
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