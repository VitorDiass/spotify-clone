import React from "react";
import ActionsMenu from "../components/ActionsMenu";
import SpotifyLogo from "../components/SpotifyLogo";

const LeftPanel = () => {
  return (
    <nav className="flex flex-col min-w-[129px] max-w-[393px] w-[260px] min-h-[485px] h-[819px] bg-spotify-black text-white p-6">
      <div className="mb-8">
        <a href="/">
          <SpotifyLogo />
        </a>
      </div>
      <div className="">
        <ActionsMenu />
      </div>
    </nav>
  );
};

export default LeftPanel;
