import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[20%] px-6 md:px-24 bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className={"py-6 text-lg w-1/2 hidden md:inline-block"}>{overview}</p>
      <div className="my-2 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-md mx-2 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-80 rounded-md mx-2 hover:bg-opacity-80">
          ️ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
