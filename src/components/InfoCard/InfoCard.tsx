import React from "react";
import { BiPlay } from "react-icons/bi";

interface props {
  data: any;
}

const InfoCard = ({ data }: props) => {
  return (
    <div className="flex flex-col bg-spotify-playpanel-bg rounded-md p-4 hover:bg-spotify-divider-color cursor-pointer group">
      <div className="mb-4 relative">
     {/*    <div className="absolute z-50 bg-red-500 rounded-full top-3/4 left-3/4">
          
        </div> */}
        <BiPlay className="hidden group-hover:play-button-card" size={50}/>
        <img
          src={data.artistCover}
          alt={data.name}
          className="rounded-full relative"
          height={175}
          width={175}
        />
      </div>
      <div className="min-h-[62px]">
      <div className="text-white text-md mb-1">{data.name}</div>
      <div className="text-spotify-link-subtle text-sm font-gothamlight">
        {data.tag}
      </div>

      </div>
    </div>
  );
};

export default InfoCard;
