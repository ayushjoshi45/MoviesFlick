import { useEffect, useState } from "react";
import TopNav from "./partiels/TopNav";
import Dropdown from "./partiels/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loader from "./Loader";
import Card from "./partiels/Cards";
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page,setPage]=useState(1);
  const [hasMore,setHasMore]=useState(true);
  document.title = "MoviesFlick | Trending Page"+category.toUpperCase();


  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      if(data.results.length>0){
          setTrending((prev)=>[...prev,...data.results])
        setPage(page+1);
      }
      else{
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if(trending.length===0) {
        getTrending();
    }
    else{
        setPage(1);
        setTrending([]);
        getTrending();
    }
  };


  useEffect(() => {
    refreshHandler();
  }, [duration, category]);

  return trending.length>0 ? (
    <div className=" w-full h-screens bg-[#1F1E24]">
      <div className="px-[3%] w-full flex items-center mt-2">
        <h1 className="w-[25%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Trending Movies
        </h1>
        <TopNav />
        <Dropdown
          title="Category"
          options={["all", "movie", "tv"]}
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
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<Loader />}>
      <Card data={trending} title={category}/>
        </InfiniteScroll>
    </div>
  ) : <Loader/>;
};
export default Trending;
