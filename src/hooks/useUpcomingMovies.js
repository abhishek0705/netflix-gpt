import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const { upcomingMovies } = movies || {};

  const fetchUpcomingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    upcomingMovies.length === 0 && fetchUpcomingMovies();
  }, [fetchUpcomingMovies, upcomingMovies]);
};

export default useUpcomingMovies;
