import React from "react";
import { TMDB_IMAGE_PATH } from "../utils/constant";

const MovieCard = ({ movieItem }) => {
  if (!movieItem.poster_path) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        src={TMDB_IMAGE_PATH + movieItem.poster_path}
        alt={movieItem.poster_path}
      />
    </div>
  );
};

export default MovieCard;
