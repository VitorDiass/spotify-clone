import React from "react";
import { AiFillHeart, AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const SubActionsMenu = () => {
  return (
    <div className="flex flex-col gap-y-4 px-6 text-spotify-link-subtle mt-10">
      <a href="/" className="hover:text-white">
        <div className="flex items-center gap-x-4">
          <AiFillPlusSquare size={25} />
          <span>Create Playlist</span>
        </div>
      </a>
      <a href="/" className="hover:text-white">
        <div className="flex items-center gap-x-4">
          <AiFillHeart size={25} />
          <span>Liked Songs</span>
        </div>
      </a>
    </div>
  );
};

export default SubActionsMenu;
