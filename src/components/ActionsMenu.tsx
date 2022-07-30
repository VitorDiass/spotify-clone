import React, { useState } from "react";
import { AiFillHome, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { useLocation, useParams } from "react-router-dom";
import { clsx } from 'clsx';
import { BiSearchAlt, BiLibrary } from "react-icons/bi";

const ActionsMenu = () => {
  const route = useLocation();

  return (
    <ul className="flex flex-col gap-y-4 text-spotify-link-subtle">
      <li>
        <a href="/home" className="hover:text-white">
          <div className="flex items-center gap-x-4">
            {route.pathname === "/home" ? <AiFillHome size={25} className="text-white" /> : <AiOutlineHome size={25} />}
            <span className={clsx(route.pathname === '/home' && 'text-white')}>Home</span>
          </div>
        </a>
      </li>
      <li>
      <a href="/search" className="hover:text-white" >
          <div className="flex items-center gap-x-4">
            {route.pathname === "/search" ? <BiSearchAlt size={25} className="text-white" /> : <AiOutlineSearch size={25} />}
            <span className={clsx(route.pathname === '/search' && 'text-white')}>Search</span>
          </div>
        </a>
      </li>
      <li>
      <a href="/library" className="hover:text-white">
          <div className="flex items-center gap-x-4">
          {route.pathname === "/library" ? <BiLibrary size={25} className="text-white" /> : <VscLibrary size={25} /* className="text-spotify-link-subtle" */ />}
            <span className={clsx(route.pathname === '/library' && 'text-white')}>Your Library</span>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default ActionsMenu;
