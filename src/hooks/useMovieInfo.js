import { useCallback, useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addMovieTrailerVideo } from "../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const { movieTrailerVideo } = movies || {};
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
    movieTrailerVideo.length === 0 && fetchMovieInfo();
  }, [fetchMovieInfo, movieTrailerVideo]);
};

export default useMovieInfo;
