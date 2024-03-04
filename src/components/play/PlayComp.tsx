import React from "react";
import thumbnail from "../../assets/images/carousel1.png";
import { HeartIcon, PlayIcon, ForwardIcon, BackwardIcon, ArrowPathRoundedSquareIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";
import shuffleIcon from '../../assets/images/shuffle.svg'

function PlayComp() {
  return (
    <div className="">
      <div className="bg-[#0d0d0d] h-[90px] left-10 z-[1000] flex items-center justify-between px-6">
        {/* music info  */}
        <div className="flex flex-row items-center space-x-3">
          <div>
            <img src={thumbnail} alt="" className="w-[64px] h-[64px]" />
          </div>
          <div className="text-white">
            <div className="text-base font-sf-med">Journey to the...</div>
            <div className="text-[#b1b1b1] text-[10px] font-sf-reg">Praiz Sings</div>
          </div>
          <div>
            <HeartIcon className="text-[#ff486d] w-6 h-6" />
          </div>
        </div>

        {/* control  */}
        <div className="flex flex-col items-center justify-center space-y-2">
          {/* control here  */}
          <div className="flex flex-row items-center space-x-4">
            <img src={shuffleIcon} className="w-6 h-6" alt="" />
            <BackwardIcon className="w-6 h-6 text-[#bababa] " />
            <PlayIcon className="w-[32px] h-[32px] text-white " />
            <ForwardIcon className="w-6 h-6 text-[#bababa] " />
            <ArrowPathRoundedSquareIcon className="w-6 h-6 text-[#bababa] " />
          </div>

          {/* control slider  */}
          <div className="flex flex-row space-x-2 items-center">
            <span className="text-xs text-[#9f9f9f] font-sf-reg">8:42</span>
            <input type="range" min="1" max="100" value={50} step={0.25} className="slider" />
            <span className="text-xs text-[#9f9f9f] font-sf-reg">6:25</span>
          </div>
        </div>

        {/* other controls  */}
        <div className="flex flex-row items-center space-x-3">
            <Squares2X2Icon className="text-[#bababa] w-6" />
            <SpeakerWaveIcon className="text-[#bababa] w-6" />
            <div className="w-[100px]">
                <input type="range" min="1" max="100" value={50} step={0.25} className="slider slider2" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default PlayComp;
