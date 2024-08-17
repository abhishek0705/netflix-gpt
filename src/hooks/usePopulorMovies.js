import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addPopulorMovies } from "../store/moviesSlice";

const usePopulorMovies = () => {
  const dispatch = useDispatch();

  const fetchPopulorMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopulorMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    fetchPopulorMovies();
  }, [fetchPopulorMovies]);
};

export default usePopulorMovies;
