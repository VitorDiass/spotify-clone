import React from 'react'
import PlaylistLink from './Link'

const Playlists = () => {
  return (
    <div className='overflow-y-scroll scrollbar scrollbar-playlist h-[calc(100vh-439px)]'>
      <div className="flex flex-col py-2 px-4 gap-y-4 font-gothamlight text-xs">
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
        <PlaylistLink linkTitle='TESTE'/>
      </div>
    </div>
  )
}

export default Playlists