import React, { useState } from "react";
import { AiFillHome, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { clsx } from 'clsx';
import { BiSearchAlt, BiLibrary } from "react-icons/bi";

const ActionsMenu = () => {
  const route = useLocation();

  return (
    <ul className="flex flex-col gap-y-4 px-6 text-spotify-link-subtle">
      <li>
        <Link to="/" className="hover:text-white">
          <div className="flex items-center gap-x-4">
            {route.pathname === "/home" ? <AiFillHome size={25} className="text-white" /> : <AiOutlineHome size={25} />}
            <span className={clsx(route.pathname === '/' && 'text-white')}>Home</span>
          </div>
        </Link>
      </li>
      <li>
      <Link to="/search" className="hover:text-white" >
          <div className="flex items-center gap-x-4">
            {route.pathname === "/search" ? <BiSearchAlt size={25} className="text-white" /> : <AiOutlineSearch size={25} />}
            <span className={clsx(route.pathname === '/search' && 'text-white')}>Search</span>
          </div>
        </Link>
      </li>
      <li>
      <Link to="/library" className="hover:text-white">
          <div className="flex items-center gap-x-4">
          {route.pathname === "/library" ? <BiLibrary size={25} className="text-white" /> : <VscLibrary size={25} /* className="text-spotify-link-subtle" */ />}
            <span className={clsx(route.pathname === '/library' && 'text-white')}>Your Library</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default ActionsMenu;
