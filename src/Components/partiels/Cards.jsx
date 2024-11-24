import { Link } from "react-router-dom";

const Card = ({ data, title }) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start px-[5%] bg-[#1F1E24] mt-10">
      <div className="flex flex-wrap justify-center gap-[5%]">
        {data.map((items, index) => (
          <Link className="relative w-[25vh] mb-[5%]" key={index}>
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                items.backdrop_path || items.poster_path || items.profile_path
              }`}
              alt=""
            />
            <h1 className="text-2xl text-zinc-400 mt-3">
              {items.name ||
                items.original_name ||
                items.title ||
                items.original_title}
            </h1>
            {items.vote_average && (
              <div className="absolute right-[-13%] bottom-[30%] translate-x-[10%] translate-y-[-5%] rounded-full h-[7vh] w-[7vh] bg-yellow-600 font-semibold text-xl text-white flex items-center justify-center">
                {Math.floor(items.vote_average) * 10} <sup>%</sup>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
