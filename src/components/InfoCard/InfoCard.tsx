import React from "react";
import { CgPlayButton } from "react-icons/cg";

interface props {
  data: any;
}

const InfoCard = ({ data }: props) => {
  console.log(data)
  return (
    <div className="flex flex-col min-h-[285px] bg-spotify-playpanel-bg rounded-md p-4 hover:bg-spotify-divider-color cursor-pointer group">
      <div className="mb-4 relative">
        {/*    <div className="absolute z-50 bg-red-500 rounded-full top-3/4 left-3/4">
          
        </div> */}
        <CgPlayButton
          className="hidden group-hover:play-button-card"
          size={50}
        />
        <img
          src={data.cover}
          alt={data.infoCardTitle}
          className={`relative min-h-[175px] object-contain shadow-2xl ${data.tag === 'Album' ? 'rounded-lg' : 'rounded-full'}`}
          height={175}
          width={175}
        />
      </div>
      <div className="min-h-[62px]">
        <div className="text-white text-md mb-1">{data.infoCardTitle}</div>
        <div className="text-spotify-link-subtle text-sm font-gothamlight hover:underline">
          {data.infoCardSubTitle}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
