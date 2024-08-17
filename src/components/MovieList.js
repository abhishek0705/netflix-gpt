import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((item) => (
            <MovieCard key={item.id} movieItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
