import { useCallback, useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addMovieTrailerVideo } from "../store/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieInfo = useCallback(async () => {
    if (movieId) {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      dispatch(addMovieTrailerVideo(json.results));
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    fetchMovieInfo();
  }, [fetchMovieInfo]);
};

export default useMovieInfo;
