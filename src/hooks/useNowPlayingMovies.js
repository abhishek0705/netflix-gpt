import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies } = movies || {};
  const fetchNowPlayingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    if (nowPlayingMovies.length === 0) {
      fetchNowPlayingMovies();
    }
  }, [fetchNowPlayingMovies, nowPlayingMovies.length]);
};

export default useNowPlayingMovies;
