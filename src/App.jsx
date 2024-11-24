import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import TV from "./Components/Tv";
import People from "./Components/People";

export default function App() {
  return (
    <div className="bg-[#1F1E24] w-full h-full flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/tv" element={<TV/>} />
        <Route path="/people" element={<People/>} />
      </Routes>
    </div>
  );
}
