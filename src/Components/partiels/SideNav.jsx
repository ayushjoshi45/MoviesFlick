import React from "react";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-300 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>MoviesFlick</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-fire-fill"></i>Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-magic-fill"></i>Popular
        </Link>
        <Link to="/movies" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-movie-2-fill"></i>Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-tv-2-fill"></i>TV Shows
        </Link>
        <Link to="/people" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-team-fill"></i>people
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-information-fill"></i>About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-phone-fill"></i>Contact
        </Link>
      </nav>
    </div>
  );
};
export default SideNav;
