import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Dropdown from "./partiels/Dropdown";
import TopNav from "./partiels/TopNav";
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from "./partiels/Cards";
const Popular=()=>{
    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const[duration,setDuration]=useState('day');
    const [popular, setPopular] = useState([]);
    const [page,setPage]=useState(1);
    const [hasMore,setHasMore]=useState(true);
    document.title = "MoviesFlick | Popular Page"+category.toUpperCase();



      
        const getPopular = async () => {
          try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
      
            if(data.results.length>0){
                setPopular((prev)=>[...prev,...data.results])
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
          if(popular.length===0) {
              getPopular();
          }
          else{
              setPage(1);
              setPopular([]);
              getPopular();
          }
        };
      
        useEffect(() => {
          refreshHandler();
        }, [category,duration]);



    return popular.length>0 ? (
        <div className=" w-full h-screens bg-[#1F1E24]">
          <div className="px-[3%] w-full flex items-center mt-2">
            <h1 className="w-[25%] text-2xl font-semibold text-zinc-400">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] ri-arrow-left-line"
              ></i>{" "}
              Popular Movies
            </h1>
            <TopNav />
            <Dropdown
              title="Category"
              options={["movie", "tv"]}
              func={(e) => setCategory(e.target.value)}
            />
            <div className="w-[2%]"></div>
            <Dropdown
              title="Duration"
              options={["day", "week"]}
              func={(e) => setDuration(e.target.value)}
            />
          </div>
          <InfiniteScroll
            dataLength={popular.length}
            next={getPopular}
            hasMore={hasMore}
            loader={<Loader />}>
          <Card data={popular} title={category}/>
            </InfiniteScroll>
        </div>
      ) : <Loader/>;
}
export default Popular