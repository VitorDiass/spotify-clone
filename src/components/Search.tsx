import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchComponent = () => {
  return (
    <div className="flex items-center rounded-full bg-white w-[364px] p-2 gap-x-2">
        <BsSearch size={20}/>
        <input className="focus-visible:outline-none bg-transparent w-full font-gothamlight" placeholder="Artists, songs or podcasts" />
    </div>

  )
}

export default SearchComponent