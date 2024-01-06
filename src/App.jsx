import { Link, Routes, Route, Router, Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home";


import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faHome,
  faGlobe,
  faListUl,
  faPlus,
  faChevronLeft,
  faChevronRight,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Album from "./components/Album";
import Artist from "./components/Artist";
import Playlist from "./components/Playlist";
import Podcast from "./components/Podcast";
import Footer from "./components/Footer";
import RecentBar from "./components/RecentBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen w-full bg-black">
      <div className="bg-black w-1/3 lg:w-1/6  sticky resize-none hover:resize">
        <div className="rounded-lg m-2 gradient-bg">
          <div className="flex flex-col justify-evenly h-[10%] w-auto py-4 ml-2 space-y-2 sm:space-y-4">
            <Link
              to="/"
              className="flex space-x-3 items-center text-xl sm:text-2xl"
            >
              <FontAwesomeIcon icon={faHome} color="gray" />
              <h2 className="text-lg sm:text-2xl ">Home</h2>
            </Link>

            <Link
              to="/search"
              className="flex space-x-3 items-center text-xl sm:text-2xl"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} color="gray" />
              <h2 className="text-lg sm:text-2xl ">Search</h2>
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col h-[84%] sm:h-[85%] md:h-[85%] m-2 rounded-lg"
          style={{ "background-color": "#101010" }}
        >
          <div className="flex justify-between m-2 sm:my-4  font-bold text-gray-500 items-center">
            <div className="flex space-x-3 items-center ">
              <FontAwesomeIcon
                icon={faBook}
                className="text-sm sm:text-2xl md:text-3xl"
              />
              <h2 className="text-xs sm:text-lg md:text-xl">Your Library</h2>
            </div>
            <div className="items-center">
              <FontAwesomeIcon
                icon={faPlus}
                className="text-sm sm:text-2xl md:text-3xl"
              />
            </div>
          </div>

          <div className="flex w-auto whitespace-nowrap overflow-x-auto no-scrollbar">
            <div className="ml-2 py-1 space-x-2">
              <button className="rounded-full text-xs sm:text-sm" color="gray">
                Playlists
              </button>
              <button className="rounded-full text-xs sm:text-sm" color="gray">
                Artists
              </button>
              <button className="rounded-full text-xs sm:text-sm" color="gray">
                Albums
              </button>
              <button className="rounded-full text-xs sm:text-sm" color="gray">
                Podcasts & Shows
              </button>
            </div>
          </div>

          <div className="flex justify-between m-2 text-xs sm:text-base md:text-xl md:text-xl text-gray-500 drop-shadow-md shadow-md">
        <div className="items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="flex space-x-2 items-center hover:font-semibold text-xs sm:text-base md:text-xl ">
          <h3>Recents</h3>
          <FontAwesomeIcon
            icon={faListUl}
            style={{ "hover:fontStyle": "bold" }}
          />
        </div>
      </div>

      <div className="h-[78%] w-auto overflow-y-auto whitespace-nowrap">
          <RecentBar />

      </div>

        </div>
      </div>

      <div
        className=" w-2/3 lg:w-5/6"
        style={{ "background-color": "#101010" }}
      >
        <Navbar />

        <div className=" h-[95%] overflow-y-auto no-scrollbar bg-gradient">
          <div className="m-2 mr-4">
            <div className=" p-2" style={{ "background-color": "#1e1e1e" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/album" element={<Album />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/podcast" element={<Podcast />} />
                <Route path="/search" element={<Search />} />
              </Routes>
<br /><br />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
