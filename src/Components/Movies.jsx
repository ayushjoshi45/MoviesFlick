import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import axios from "../utils/axios";
import TopNav from "./partiels/TopNav";
import Dropdown from "./partiels/Dropdown";
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from "./partiels/Cards";

const Movies=()=>{
    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movies, setMovies] = useState([]);
    const [page,setPage]=useState(1);
    const [hasMore,setHasMore]=useState(true);
    document.title = "MoviesFlick | Movies Page"+category.toUpperCase();


    const getMovies = async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page}`);
    
          if(data.results.length>0){
              setMovies((prev)=>[...prev,...data.results])
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
        if(movies.length===0) {
            getMovies();
        }
        else{
            setPage(1);
            setMovies([]);
            getMovies();
        }
      };
    
      useEffect(() => {
        refreshHandler();
      }, [category]);



    return movies.length>0 ? (
        <div className=" w-full h-screens bg-[#1F1E24]">
          <div className="px-[3%] w-full flex items-center mt-2">
            <h1 className="w-[25%] text-2xl font-semibold text-zinc-400">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] ri-arrow-left-line"
              ></i>{" "}
            Movies
            </h1>
            <TopNav />
            <Dropdown
              title="Category"
              options={["popular", "top_rated", "upcoming","now_playing"]}
              func={(e) => setCategory(e.target.value)}
            />
            <div className="w-[2%]"></div>
          </div>
          <InfiniteScroll
            dataLength={movies.length}
            next={getMovies}
            hasMore={hasMore}
            loader={<Loader />}>
          <Card data={movies} title={category}/>
            </InfiniteScroll>
        </div>
      ) : <Loader/>;
}
export default Movies