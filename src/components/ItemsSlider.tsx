import React, { FunctionComponent, useRef, useState } from 'react';
import { sliderDisplayData } from '../data/DummyData';
import { SliderDisplayDataType } from '../types';

type ItemSliderProps = {
  title: string;
}

const ItemsSlider: FunctionComponent<ItemSliderProps> = ({title}) => {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const [data, setData] = useState(sliderDisplayData)

  return (
    <div className='overflow-x-hidden'>
        <div className='flex items-center justify-between mb-4'>
          <div className='font-sf-bold text-xl'>{title}</div>
          <div>More</div>
        </div>

        {/* slider here */}
        <div className=''>
          <div className='flex items-center gap-4 overflow-x-auto no-scrollbar flex-nowrap'>
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