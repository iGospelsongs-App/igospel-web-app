import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Ministration } from "../types";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

type ItemSliderProps = {
  title: string;
  sliderData: Ministration[];
};

const Minister: FunctionComponent<ItemSliderProps> = ({ title, sliderData }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300;
  const [data, setData] = useState<Ministration[]>(sliderData || []);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = sliderRef.current;
      if (container) {
        setIsLeftDisabled(container.scrollLeft === 0);
        setIsRightDisabled(container.scrollLeft >= container.scrollWidth - container.clientWidth);
      }
    };

    const container = sliderRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (sliderData) {
      setData(sliderData);
    }
  }, [sliderData]);

  const leftScroll = () => {
    const container = sliderRef.current;
    if (container) {
      container.scrollLeft -= scrollAmount;
    }
  };

  const rightScroll = () => {
    const container = sliderRef.current;
    if (container) {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="font-sf-bold text-base sm:text-xl">{title}</div>

        <div className="flex items-center space-x-2 sm:space-x-6 ">
          <div className="text-[10px] sm:text-sm font-sf-reg border-[1px] border-slate-400 rounded-xl px-2 sm:px-3 py-[1px] sm:py-[2px] cursor-pointer">
            More
          </div>
          <div className="flex items-center gap-2">
            <div
              className="p-2 rounded-full border-2 border-slate-400 cursor-pointer"
              onClick={leftScroll}
            >
              <FaAngleLeft className={`${isLeftDisabled ? "text-gray-500" : "text-white"}`} />
            </div>
            <div
              className="p-2 rounded-full border-2 border-slate-400 cursor-pointer"
              onClick={rightScroll}
            >
              <FaAngleRight className={`${isLeftDisabled ? "text-gray-500" : "text-white"}`} />
            </div>
          </div>
        </div>
      </div>

      {/* slider here */}
      <div className="">
        <div
          ref={sliderRef}
          className="flex items-center gap-4 overflow-x-auto no-scrollbar flex-nowrap scroll-smooth transition duration-300 ease-in-out"
        >
          {data.length > 0 ? (
            data.map((item: Ministration, i: number) => (
              <div className="min-w-[110px] sm:min-w-[210px]" key={i}>
                <img src={item.image} alt="" className="w-[110px] sm:w-[152px]" />
                <div className="font-sf-med text-[11px] sm:text-sm text-white text-center -ml-[3rem]">{item.title}</div>
              </div>
            ))
          ) : (
            <div className="text-white">No items to display</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Minister;
