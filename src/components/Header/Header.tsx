import React, { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";

interface props {
  children?: React.ReactNode;
}

const Header = ({ children }: props) => {
  const route = useLocation();
  const history = useNavigate();

  return (
    <header>
      <div className="flex justify-between items-center sticky top-0 z-50 p-4 bg-neutral-900 border-b border-neutral-800 h-20">
        <div className="flex items-center text-spotify-link-subtle gap-x-2">
          <IoChevronBackCircleOutline
            size={35}
            className="cursor-pointer"
            onClick={() => history(-1)}
          />
          <IoChevronForwardCircleOutline
            size={35}
            className="cursor-pointer"
            onClick={() => history(1)}
          />
          {children}
        </div>
        <div className="flex items-center">
          <button className="flex items-center gap-x-2 py-1 px-2 rounded-full bg-spotify-black"><FaUserCircle size={25}/> Vitor Dias <FaChevronDown /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
