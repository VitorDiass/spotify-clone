import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header/Header";
import { Artists } from "../mock/artists";
import { GoVerified } from "react-icons/go";
import { CgPlayButton } from "react-icons/cg";
import { Button } from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { TbDots } from "react-icons/tb";

import Track, { TrackInterface } from "../components/Track/Track";
import InfoGrid from "../components/InfoGrid/InfoGrid";

const Artist = () => {
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [showMore, setShowMore] = useState(false);
  

  const updateIsFollowing = () => {
    setIsFollowing(prevState => !prevState)
  }

  return (
    <>
      {Artists.map((artist) => {
        if (artist.id === id) {
          return (
            <>
              <div className={`h-[372px] bg-red-200 ${artist.bgcss}`}>
                <Header isTransparent={true} />
                <div className="p-6 mt-10 flex flex-col">
                  {artist?.isVerified && (
                    <>
                      <div className="flex items-center gap-x-2">
                        <GoVerified
                          size={24}
                          className="text-spotify-verified-blue"
                        />
                        <span className="font-gothamlight text-sm">
                          Verified Artist
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-7xl">{artist.name}</span>
                      </div>
                      <div className="flex mt-10">
                        <span className="font-gothamlight text-base">
                          {artist.monthlyListeners} monthly listeners
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col p-6">
                <div className="flex items-center gap-x-10">
                    <CgPlayButton size={55} className="bg-spotify-green rounded-full text-black"/>
                    <div className="border border-opacity-70 border-spotify-gray hover:border-white rounded-md px-4 py-2 text-xs cursor-default" onClick={() => updateIsFollowing()}>{isFollowing ? 'FOLLOWING' : 'FOLLOW'}</div>
                    <TbDots size={28} className="text-spotify-gray hover:text-white"/>
                </div>
                <div className="text-xl my-6">
                    Popular
                </div>
                {showMore ? artist.popularSongs?.slice(0,10).map((song : TrackInterface, index : number) => {
                    return (
                        <>
                          <Track key={index} track={song} index={index} isSimplified={true}/>
                        </>
                    )
                }) : artist.popularSongs?.slice(0,5).map((song : TrackInterface, index : number) => {
                  return (
                      <>
                        <Track key={index} track={song} index={index} isSimplified={true}/>
                      </>
                  )
              }) }
              <div className="flex p-6 text-xs tracking-wider text-spotify-gray">
                <span className="cursor-pointer" onClick={() => setShowMore(prev => !prev)}>{showMore ? 'SEE LESS' : 'SEE MORE'}</span>
              </div>
              <div className="text-xl my-6">
                    Discography
                </div>
                <InfoGrid data={artist.albums} />
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default Artist;
