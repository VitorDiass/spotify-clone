import React, { useEffect, useState } from "react";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiRepeat } from "react-icons/bi";
import { BsShuffle } from "react-icons/bs";
import { MdQueueMusic } from "react-icons/md";
import { TbDevices2 } from "react-icons/tb";
import { TiVolumeDown, TiVolumeMute, TiVolumeUp } from "react-icons/ti";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

const PlayPanel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = React.useState(100);
  const handleVolumeChange = (e: any) => {
    setVolume(e);
  };

  return (
    <div className="w-full min-h-[90px] max-h-[120px] bottom-0 absolute bg-spotify-playpanel-bg border-t border-spotify-divider-color flex justify-between p-4 font-gothamlight">
      <div className="flex w-1/3 justify-start items-center gap-x-3">
        <img src="/current_playing.jpg" height={56} width={56}></img>
        <div className="flex flex-col">
          <a href="/" className="hover:underline">
            Signs
          </a>
          <a href="/" className="text-spotify-link-subtle hover:underline hover:text-white">
            <small>Laura-Mary Carter</small>
          </a>
        </div>
        <span className="text-spotify-link-subtle hover:text-white">
          <AiOutlineHeart size={20} />
        </span>
      </div>
      <div className="flex flex-col w-1/3 gap-y-3 justify-start text-spotify-link-subtle items-center">
        <div className="flex items-center gap-x-4">
          <BsShuffle size={25} className="hover:text-white" />
          <AiFillStepBackward size={25} className="hover:text-white" />
          {isPlaying ?  <AiFillPauseCircle size={40} className="text-white" onClick={() => setIsPlaying(prev => !prev)}/> : <AiFillPlayCircle size={40} className="text-white" onClick={() => setIsPlaying(prev => !prev)}/>}
          <AiFillStepForward size={25} className="hover:text-white" />
          <BiRepeat size={25} className="hover:text-white" />
        </div>
        <div className="w-full flex items-center gap-x-3">
          <span>0:00</span>
          <ProgressBar
            sliderThumbShow={true}
            defaultValue={0}
            handleSlideChange={() => {}}
          />
          <span>2:57</span>
        </div>
      </div>
      <div className="flex w-1/3 justify-end items-center gap-x-3 text-spotify-link-subtle">
        <MdQueueMusic size={25} className="hover:text-white" />
        <TbDevices2 size={25} className="hover:text-white" />
        {volume === 0 ? (
          <TiVolumeMute size={25} className="hover:text-white" />
        ) : volume > 0 && volume <= 65 ? (
          <TiVolumeDown size={25} className="hover:text-white" />
        ) : (
          <TiVolumeUp size={25} className="hover:text-white" />
        )}
        <div className="flex w-2/12 ">
          <ProgressBar
            sliderThumbShow={true}
            defaultValue={volume}
            handleSlideChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayPanel;
