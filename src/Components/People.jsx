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
    const [category, setCategory] = useState("popular");
    const [people, setPeople] = useState([]);
    const [page,setPage]=useState(1);
    const [hasMore,setHasMore]=useState(true);
    document.title = "MoviesFlick | TV Page";
    
    
    const getPeople = async () => {
        try {
          const { data } = await axios.get(`/person/popular`);
    
          if(data.results.length>0){
              setPeople((prev)=>[...prev,...data.results])
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
        if(people.length===0) {
            getPeople();
        }
        else{
            setPage(1);
            setPeople([]);
            getPeople();
        }
      };
    
      useEffect(() => {
        refreshHandler();
      }, []);



  return people.length>0 ? (
      <div className=" w-full h-screens bg-[#1F1E24]">
        <div className="px-[3%] w-full flex items-center mt-2">
          <h1 className="w-[25%] text-2xl font-semibold text-zinc-400">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] ri-arrow-left-line"
            ></i>{" "}
            PEOPLE
          </h1>
          <TopNav />
          <div className="w-[2%]"></div>
        </div>
        <InfiniteScroll
          dataLength={people.length}
          next={getPeople}
          hasMore={hasMore}
          loader={<Loader />}>
        <Card data={people} title={category}/>
          </InfiniteScroll>
      </div>
    ) : <Loader/>;
}
export default Tv