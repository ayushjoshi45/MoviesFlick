import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
const TopNav = () => {
  const [query, setQuery] = useState("");
  const [search, setsearch] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[20%]">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="z-[10] fixed w-[40%] max-h-[50vh] top-[10vh] bg-zinc-200 overflow-auto">
        {search.map((items, index) => {
          return (
            <Link
              key={index}
              className="block hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 flex justify-start items-center border-b-2 border-zinc-100 p-10"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover mr-5"
                src={
                  items.backdrop_path || items.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        items.backdrop_path || items.profile_path
                      }`
                    : noimage
                }
              />
              <span>
                {items.name ||
                  items.title ||
                  items.original_name ||
                  items.original_title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TopNav;
