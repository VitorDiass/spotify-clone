import React from "react";
import ChartCard from "../components/ChartCard/ChartCard";
import Header from "../components/Header/Header";
import SearchComponent from "../components/Search";
import { YourTopGenres, YourTopGenresInterface } from '../mock/yourTopGenres'

const Search = () => {
  return (
    <>
      <Header>
        <SearchComponent />
      </Header>
      <div className="flex flex-col p-10">
        <div className="text-xl mb-6">
          Your top genres
        </div>
        <div className="flex flex-wrap justify-start gap-x-5 sm:gap-y-5 4xl:gap-y-0">
         {YourTopGenres.map((chartCard : YourTopGenresInterface, index : number) => {
          return (
            <>
              <ChartCard key={index} cardTitle={chartCard.name} linkTo={chartCard.linkTo} backgroundColor={chartCard.backgroundColor} cardImage={chartCard.cardImage}/>
            </>
          )
         })}
        </div>
        <div className="text-xl mt-12">
          Browse all
        </div>
      </div>
    </>
  );
};

export default Search;
