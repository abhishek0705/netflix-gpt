import React from "react";
import useMovieInfo from "../hooks/useMovieInfo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId = "", title = "" }) => {
  useMovieInfo(movieId);
  const movieTrailerVideo = useSelector(
    (store) => store.movies?.movieTrailerVideo
  );

  const filterMovieTrailers = movieTrailerVideo.filter(
    (video) => video.type === "Trailer"
  );
  const movieTrailer = filterMovieTrailers.length
    ? filterMovieTrailers[0]
    : movieTrailerVideo[0];

  const { key: trailerId } = movieTrailer || {};

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"
        }
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      />
    </div>
  );
};

export default VideoBackground;
