import { Link, Routes, Route, Router, Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import Search from "./components/Search";
import Home from "./components/Home";

import Ye from "./assets/ye.jpg";
import Cudi from "./assets/cudi.jpg";

import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen w-full bg-black">
      <div className="bg-black w-1/3 lg:w-1/6  sticky resize-none hover:resize">
        <div className="rounded-lg m-2 gradient-bg">
          <div className="flex flex-col justify-evenly h-[10%] w-auto py-4 ml-2 space-y-2">
            <Link to="/" className="flex space-x-3 items-center text-xl">
              <FontAwesomeIcon icon={faHome} color="gray" />
              <h2 className="text-lg">Home</h2>
            </Link>

            <Link to="/search" className="flex space-x-3 items-center text-xl">
              <FontAwesomeIcon icon={faMagnifyingGlass} color="gray" />
              <h2 className="text-lg">Search</h2>
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col h-[90%] m-2 rounded-lg"
          style={{ "background-color": "#101010" }}
        >
          <div className="flex justify-between m-4 font-bold text-gray-500">
            <div className="flex space-x-3 items-center ">
              <FontAwesomeIcon icon={faBook} className="text-xl" />
              <h2 className="text-lg md:text-md sm:text-sm">Your Library</h2>
            </div>
            <div className="items-center">
              <FontAwesomeIcon icon={faPlus} className="text-2xl" />
            </div>
          </div>

          <div className="flex w-auto whitespace-nowrap overflow-x-auto no-scrollbar">
            <div className="m-2 space-x-2">
              <button className="rounded-full" color="gray">
                Playlists
              </button>
              <button className="rounded-full" color="gray">
                Artists
              </button>
              <button className="rounded-full" color="gray">
                Albums
              </button>
              <button className="rounded-full" color="gray">
                Podcasts & Shows
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between m-2 sm:text-md text-xl text-gray-500">
              <div className="items-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className="flex space-x-2 items-center hover:font-semibold md:text-md sm:text-sm">
                <h3>Recents</h3>
                <FontAwesomeIcon
                  icon={faListUl}
                  style={{ "hover:fontStyle": "bold" }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[85%] w-auto overflow-y-auto whitespace-nowrap">
            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-16">
                  <img src={Ye} className="h-auto w-16 rounded-lg"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-12">
                  <img src={Cudi} className="h-auto w-12 rounded-lg"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-16">
                  <img src={Ye} className="h-auto w-16 rounded-lg"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-12">
                  <img src={Cudi} className="h-auto w-12 rounded-lg"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-16">
                  <img src={Ye} className="h-auto w-16 rounded-lg"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-12">
                  <img src={Cudi} className="h-auto w-12 rounded-lg"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-16">
                  <img src={Ye} className="h-auto w-16 rounded-lg"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-12">
                  <img src={Cudi} className="h-auto w-12 rounded-lg"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-16">
                  <img src={Ye} className="h-auto w-16 rounded-lg"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-12">
                  <img src={Cudi} className="h-auto w-12 rounded-lg"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-16">
                  <img src={Ye} className="h-auto w-16 rounded-lg"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-12">
                  <img src={Cudi} className="h-auto w-12 rounded-lg"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-16">
                  <img src={Ye} className="h-auto w-16 rounded-lg"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-12">
                  <img src={Cudi} className="h-auto w-12 rounded-lg"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-16">
                  <img src={Ye} className="h-auto w-16 rounded-lg"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-12">
                  <img src={Cudi} className="h-auto w-12 rounded-lg"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-16">
                  <img src={Ye} className="h-auto w-16 rounded-lg"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-12">
                  <img src={Cudi} className="h-auto w-12 rounded-lg"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" w-2/3 lg:w-5/6"
        style={{ "background-color": "#101010" }}
      >
        <div className="flex  h-[5%] sticky justify-between items-center w-auto mb-1 mt-2 mx-2 rounded-lg gradient-bg">
          <div className="justify-start ml-6 space-x-2">
            <a href="#" className=" text-gray-500">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <a href="#" className=" text-gray-500">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>

          <div className="justify-end space-x-4 mr-4">
            <a href="#" className="font-extrabold text-white">
              Sign up
            </a>
            <button className="font-extrabold bg-white text-black rounded-full">
              Log In
            </button>
          </div>
        </div>

        <div
          className=" h-[95%] overflow-y-auto no-scrollbar"
          style={{ "background-color": "#101010" }}
        >
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

              <div>
                <br></br>
                <div className="flex sm:grid sm:grid-flow-col  sm:auto-cols-auto justify-between ml-4 rounded-lg h-1/6 space-y-2">
                  <div className="flex flex-col">
                    <h2 className="font-bold">Company</h2>
                    <a>About</a>
                    <a>Jobs</a>
                    <a>For the Record</a>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">Communities</h2>
                    <a>For Artists</a>
                    <a>Developers</a>
                    <a>Advertising</a>
                    <a>Investors</a>
                    <a>Vendors</a>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">Useful links</h2>
                    <a>Support</a>
                    <a>Free Mobile App</a>
                  </div>
                  <div className="flex flex-col items-left mr-4">
                    <h2 className="font-bold">Socials</h2>
                    <div className="flex space-x-2">
                      <a>
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>

                      <a>
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>

                      <a>
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <br></br>

              <div>
                <div className="flex flex-wrap space-x-4 ml-4 mb-4 rounded-lg text-gray-500 text-sm">
                  <a>Legal</a>
                  <a>Privacy Center</a>
                  <a>Cookies</a>
                  <a>About Ads</a>
                  <a>Accessbility</a>
                  <a>Notice at Collection</a>
                  <a>Your Privacy Choices</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
