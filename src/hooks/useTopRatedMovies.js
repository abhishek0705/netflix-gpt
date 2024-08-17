import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const { topRatedMovies } = movies || {};

  const fetchTopRatedMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    topRatedMovies.length === 0 && fetchTopRatedMovies();
  }, [fetchTopRatedMovies, topRatedMovies]);
};

export default useTopRatedMovies;
