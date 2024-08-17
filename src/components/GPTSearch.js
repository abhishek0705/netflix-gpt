import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_LOGIN_IMAGE } from "../utils/constant";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_LOGIN_IMAGE}
          alt="bg-image"
          className="h-screen object-cover"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
