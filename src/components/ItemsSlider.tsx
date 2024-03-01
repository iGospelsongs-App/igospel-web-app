//created this scroll slider with reference from https://dev.to/aneeqakhan/building-an-image-slider-with-smooth-scrolling-using-react-1jdb

import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { SliderDisplayDataType } from "../types";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

type ItemSliderProps = {
  title: string;
  sliderData: SliderDisplayDataType[];
};

const ItemsSlider: FunctionComponent<ItemSliderProps> = ({ title, sliderData }) => {
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
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const leftScroll = () => {
    const container = sliderRef.current as HTMLElement | null;
    if (container) {
      container.scrollLeft -= scrollAmount;
    }
  };

  const rightScroll = () => {
    const container = sliderRef.current as HTMLElement | null;
    if (container) {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="font-sf-bold text-base sm:text-xl">{title}</div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="text-[10px] sm:text-sm font-sf-reg border-[1px] border-white rounded-xl px-2 sm:px-3 py-[1px] sm:py-[2px] cursor-pointer">
            More
          </div>
          <div className="flex items-center gap-2">
            <ArrowLeftCircleIcon
              onClick={leftScroll}
              className={`${isLeftDisabled ? "text-gray-500" : "text-white"} w-8 sm:w-10 h-8 sm:h-10 cursor-pointer`}
            />
            <ArrowRightCircleIcon
              onClick={rightScroll}
              className={`${isRightDisabled ? "text-gray-500" : "text-white"} w-8 sm:w-10 h-8 sm:h-10 cursor-pointer`}
            />
          </div>
        </div>
      </div>

      {/* slider here */}
      <div className="">
        <div
          ref={sliderRef}
          className="flex items-center gap-4 overflow-x-auto no-scrollbar flex-nowrap scroll-smooth transition duration-300 ease-in-out"
        >
          {data.map((item: SliderDisplayDataType, i: number) => (
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

export default ItemsSlider;
