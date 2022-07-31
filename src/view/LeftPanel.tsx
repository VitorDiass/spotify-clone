import React from "react";
import { Link } from "react-router-dom";
import ActionsMenu from "../components/ActionsMenu";
import Divider from "../components/Divider";
import Playlists from "../components/Playlists";
import SpotifyLogo from "../components/SpotifyLogo";
import SubActionsMenu from "../components/SubActionsMenu";

const LeftPanel = () => {
  return (
    <nav className="flex flex-col min-w-[129px] max-w-[393px] w-[260px] h-full bg-spotify-black text-white p-6">
      {/*  min-h-[485px] h-[819px] */}
      <div className="mb-8">
        <a href="/">
          <SpotifyLogo />
        </a>
      </div>

      <ActionsMenu />
      <SubActionsMenu />

      <Divider />
      <Playlists />
    </nav>
  );
};

export default LeftPanel;
