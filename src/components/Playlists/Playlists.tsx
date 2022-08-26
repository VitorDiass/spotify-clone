import React from 'react'
import PlaylistLink from './Link'

const Playlists = () => {
  return (
    <div className='overflow-y-scroll scrollbar scrollbar-playlist h-[calc(100vh-439px)]'>
      <div className="flex flex-col py-2 px-4 gap-y-4 font-gothamlight text-xs">
        <PlaylistLink linkTitle='My Playlist 1'/>
        <PlaylistLink linkTitle='My Playlist 2'/>
        <PlaylistLink linkTitle='My Playlist 3'/>
        <PlaylistLink linkTitle='My Playlist 4'/>
        <PlaylistLink linkTitle='My Playlist 5'/>
        <PlaylistLink linkTitle='My Playlist 6'/>
        <PlaylistLink linkTitle='My Playlist 7'/>
        <PlaylistLink linkTitle='My Playlist 8'/>
        <PlaylistLink linkTitle='My Playlist 9'/>
        <PlaylistLink linkTitle='My Playlist 10'/>
        <PlaylistLink linkTitle='My Playlist 11'/>
        <PlaylistLink linkTitle='My Playlist 12'/>
        <PlaylistLink linkTitle='My Playlist 13'/>
      </div>
    </div>
  )
}

export default Playlists