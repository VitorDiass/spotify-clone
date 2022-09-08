import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgPlayButton } from 'react-icons/cg'
import { TbDots } from 'react-icons/tb'


export interface TrackInterface {
  id : string,
  cover : string,
  name : string, 
  plays : string,
  duration : string
  artist : string
}

interface props {
  track : TrackInterface
  index : number
  isSimplified : boolean
}

const Track = ({track, index, isSimplified} : props) => {
  return (
    <div className="flex justify-between max-w-7xl items-center p-2 font-gothamlight hover:bg-spotify-divider-color rounded-md group">
      <div className="flex items-center gap-x-6 min-w-[300px]">
        <div className="min-w-[15px] w-[30px] max-w-[30px]">
          <div className="group-hover:hidden text-center">
              {index+1}
          </div>
          <div className="hidden group-hover:block">
              <CgPlayButton size={40}/>
          </div>
          </div>
        <img src={track.cover} width={40} height={40}/>
        {isSimplified ? 
          <div className="text-sm">
            {track.name}
          </div> : <></>}
      </div>
      <div className="text-spotify-gray">
        {track.plays}
      </div>
      <div className="flex items-center gap-x-6 text-spotify-gray min-w-[120px]">
        <div className="invisible group-hover:visible">
          <AiOutlineHeart size={18} className=""/>
        </div>
        <span className="min-w-[35px] text-center">{track.duration}</span>
        <TbDots size={20} className="invisible group-hover:visible text-spotify-gray hover:text-white text-center"/>
      </div>
    </div>
  )
}

export default Track