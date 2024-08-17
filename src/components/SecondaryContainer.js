import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, populorMovies, topRatedMovies, upcomingMovies } =
    movies || {};

  return (
    <div className=" bg-black">
      <div className="-mt-56 pl-12 z-30 relative">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Populor"} movies={populorMovies} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
