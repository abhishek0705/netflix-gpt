import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    movieTrailerVideo: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailerVideo: (state, action) => {
      state.movieTrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailerVideo } =
  moviesSlice.actions;

export default moviesSlice.reducer;
