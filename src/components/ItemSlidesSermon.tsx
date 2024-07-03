import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { SermaonlistDataType } from "../types";

type ItemSliderProps = {
  title: string;
  sliderData: SermaonlistDataType[];
};

const ItemsSliderSermon: FunctionComponent<ItemSliderProps> = ({ title, sliderData }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [data] = useState<SermaonlistDataType[]>(sliderData);

  useEffect(() => {
    const handleScroll = () => {
      const container = sliderRef.current;
      if (container) {
        // You can add any scroll-related logic here if needed.
      }
    };

    const container = sliderRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="overflow-x-hidden ">
      <div className="flex items-center justify-between mb-4">
        <div className="font-sf-bold text-base sm:text-xl">{title}</div>
    
      </div>

      <div className="">
        <div
          ref={sliderRef}
          className="flex items-center gap-4 overflow-x-auto no-scrollbar flex-nowrap scroll-smooth transition duration-300 ease-in-out"
        >
          {data.map((item: SermaonlistDataType, i: number) => (
            <div className="min-w-[110px] sm:min-w-[152px]" key={i}>
              <img src={item.image} alt="" className="w-[110px] sm:w-[152px]" />
              <div className="font-sf-med text-[11px] sm:text-sm text-white">{item.title}</div>
              <div className="font-sf-med text-[10px] text-gray-400">{item.artist}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSliderSermon;
