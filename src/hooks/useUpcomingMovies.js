import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const fetchUpcomingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    fetchUpcomingMovies();
  }, [fetchUpcomingMovies]);
};

export default useUpcomingMovies;
