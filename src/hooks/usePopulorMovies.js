import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addPopulorMovies } from "../store/moviesSlice";

const usePopulorMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const { populorMovies } = movies || {};

  const fetchPopulorMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopulorMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    populorMovies.length === 0 && fetchPopulorMovies();
  }, [fetchPopulorMovies, populorMovies]);
};

export default usePopulorMovies;
