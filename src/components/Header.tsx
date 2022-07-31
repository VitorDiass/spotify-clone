import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";


const Header = () => {
  const route = useLocation();
  const history = useNavigate();
  
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-spotify-link-subtle gap-x-2">
          <IoChevronBackCircleOutline size={35} className="cursor-pointer" onClick={() => history(-1)}/>
          <IoChevronForwardCircleOutline size={35} className="cursor-pointer" onClick={() => history(1)}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
