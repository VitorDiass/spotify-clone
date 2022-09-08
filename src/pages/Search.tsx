import React from "react";
import ChartCard from "../components/ChartCard/ChartCard";
import Header from "../components/Header/Header";
import SearchComponent from "../components/Search";
import { BrowseAll } from "../mock/browseAll";
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
        <div className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  gap-x-5 sm:gap-y-5 4xl:gap-y-0">
         {YourTopGenres.map((chartCard : YourTopGenresInterface, index : number) => {
          return (
            <>
              <ChartCard key={index} cardTitle={chartCard.name} linkTo={chartCard.linkTo} backgroundColor={chartCard.backgroundColor} cardImage={chartCard.cardImage} largeCard={true}/>
            </>
          )
         })}
        </div>
        <div className="text-xl mt-12 mb-6">
          Browse all
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-5">
          {BrowseAll.map((chartCard, index :number) => {
          return (
            <>
              <ChartCard key={index} cardTitle={chartCard.name} linkTo={chartCard.linkTo} backgroundColor={chartCard.backgroundColor} cardImage={chartCard.cardImage} largeCard={false}/>
            </>
          )
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
