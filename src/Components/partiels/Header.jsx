import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6),rgba(0,0,0,0.8)),
            url(https://image.tmdb.org/t/p/original/${
              data.backdrop_path || data.profile_path
            })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "10px",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="text-5xl font-black text-white w-[70%]">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-white mb-3">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400">more</Link>
      </p>

      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {""}
        {data.release_date || "No Information"}
        <i className="text-yellow-500 ri-album-fill ml-5"></i>
        {""}
        {data.media_type.toUpperCase()}
      </p>

      <Link className="mt-5 bg-[#6556CD] p-4 rounded text-white font-semibold">
        Watch Trailer
      </Link>
    </div>
  );
};
export default Header;
