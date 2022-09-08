import React from "react";
import Header from "../components/Header/Header";
import InfoGrid from "../components/InfoGrid/InfoGrid";
import { Artists, RecommendedForToday } from "../mock/artists";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex p-6">
        <InfoGrid title="Recently played" data={Artists}/>
      </div>
      <div className="flex p-6">
        <InfoGrid title="Recommended for today" titleLink="#" data={RecommendedForToday.map(x => { return x.albums[0]})}/>
      </div>
    </>
  );
};

export default Home;
