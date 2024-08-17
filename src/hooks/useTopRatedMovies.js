import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchTopRatedMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    fetchTopRatedMovies();
  }, [fetchTopRatedMovies]);
};

export default useTopRatedMovies;
