import React from "react";
import Header from "../components/Header/Header";
import InfoGrid from "../components/InfoGrid/InfoGrid";
import { ArtistsData } from "../mock/artists";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex p-6">
        <InfoGrid title="Recently played" data={ArtistsData}/>
      </div>
    </>
  );
};

export default Home;
