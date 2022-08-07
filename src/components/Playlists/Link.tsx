import React from "react";
import { Link } from "react-router-dom";

interface props {
  to?: string;
  linkTitle?: string;
}

const PlaylistLink = ({ to = "/", linkTitle }: props) => {
  return (
    <Link to={to} className="text-spotify-link-subtle hover:text-white">
      {linkTitle}
    </Link>
  );
};

export default PlaylistLink;
