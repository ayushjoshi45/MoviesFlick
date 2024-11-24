import React, { useEffect, useState } from "react";
import SideNav from "./partiels/SideNav";
import TopNav from "./partiels/TopNav";
import axios from "../utils/axios";
import Header from "./partiels/Header";
import HorizontalCards from "./partiels/HorizontalCards";
import Dropdown from "./partiels/Dropdown";
import Loader from "./Loader";

const Home = () => {
  document.title = "MoviesFlick | Home Page";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const[category,setCategory]= useState('all');

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomWallpaper =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomWallpaper);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   !wallpaper && getWallpaper();
    getTrending();
  }, [category]);




  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full ">
        <TopNav />
        <Header data={wallpaper} />

        <div className="my-5 mx-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-white">Trending</h1>
        <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)} />
      </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loader/>
  );
};
export default Home;
