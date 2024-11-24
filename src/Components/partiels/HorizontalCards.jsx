import React from "react";

const HorizontalCards = ({ data }) => {
  return (
      
      <div className="w-full flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-[#6556CD] scrollbar-track-transparent p-5 mb-5 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[20%] min-h-full flex-shrink-0 bg-zinc-900 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-[200px] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.poster_path || ""
              }`}
              alt="Poster"
            />
            <div className="p-2">
              <h1 className="mt-2 text-xl font-bold text-white">
                {item.name ||
                  item.title ||
                  item.original_name ||
                  item.original_title}
              </h1>
              <p className="text-xl text-zinc-400 mt-1">
                {item.overview
                  ? `${item.overview.slice(0, 80)}...`
                  : "No description available"}
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default HorizontalCards;
