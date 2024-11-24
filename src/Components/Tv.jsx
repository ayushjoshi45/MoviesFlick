import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import axios from "../utils/axios";
import TopNav from "./partiels/TopNav";
import Dropdown from "./partiels/Dropdown";
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from "./partiels/Cards";

const Tv=()=>{
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, setTv] = useState([]);
    const [page,setPage]=useState(1);
    const [hasMore,setHasMore]=useState(true);
    document.title = "MoviesFlick | TV Page"+category.toUpperCase();
    
    
    const getTv = async () => {
        try {
          const { data } = await axios.get(`/tv/${category}?page=${page}`);
    
          if(data.results.length>0){
              setTv((prev)=>[...prev,...data.results])
            setPage(page+1);
          }
          else{
            setHasMore(false);
          }
        //   setTrending(data.results);
        } catch (error) {
          console.log(error);
        }
      };
    
      const refreshHandler = () => {
        if(tv.length===0) {
            getTv();
        }
        else{
            setPage(1);
            setTv([]);
            getTv();
        }
      };
    
      useEffect(() => {
        refreshHandler();
      }, [category]);



  return tv.length>0 ? (
      <div className=" w-full h-screens bg-[#1F1E24]">
        <div className="px-[3%] w-full flex items-center mt-2">
          <h1 className="w-[25%] text-2xl font-semibold text-zinc-400">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] ri-arrow-left-line"
            ></i>{" "}
            TV
          </h1>
          <TopNav />
          <Dropdown
            title="Category"
            options={["airing_today", "on_the_air","top_rated","popular"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
        <InfiniteScroll
          dataLength={tv.length}
          next={getTv}
          hasMore={hasMore}
          loader={<Loader />}>
        <Card data={tv} title={category}/>
          </InfiniteScroll>
      </div>
    ) : <Loader/>;
}
export default Tv