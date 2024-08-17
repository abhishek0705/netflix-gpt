import React from "react";
import { TMDB_IMAGE_PATH } from "../utils/constant";

const MovieCard = ({ movieItem }) => {
  return (
    <div className="w-48 pr-4">
      {/* {JSON.stringify(movieItem)} */}
      <img
        src={TMDB_IMAGE_PATH + movieItem.poster_path}
        alt={movieItem.poster_path}
      />
    </div>
  );
};

export default MovieCard;
