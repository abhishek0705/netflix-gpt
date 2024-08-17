import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../store/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (store) => store.config.selectedLanguage
  );

  const searchText = useRef(null);

  const handSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Hera Pheri, Golmaal";
    // result of gpt but api is exhausted so added dummy result.
    // const completion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // const gptMovies = completion.choices?.[0]?.message?.content?.split(", ");
    const dummyGptResult =
      "Andaz Apna Apna, Chupke Chupke, Padosan, Hera Pheri, Golmaal, Amar Akbar Anthony, Chalti Ka Naam Gaadi";
    const gptMovies = dummyGptResult.split(", ");

    const promiseMovieArray = gptMovies.map((movie) => fetchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseMovieArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  const fetchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      TMDB_API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12 rounded-md"
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3"
          onClick={handSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
