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
          className="flex flex-col h-[84%] sm:h-[87%] md:h-[88%] m-2 rounded-lg"
          style={{ "background-color": "#101010" }}
        >
          <div className="flex justify-between m-2 sm:my-4  font-bold text-gray-500 items-center">
            <div className="flex space-x-3 items-center ">
              <FontAwesomeIcon
                icon={faBook}
                className="text-sm sm:text-2xl md:text-3xl"
              />
              <h2 className="text-xs sm:text-lg md:text-2xl">Your Library</h2>
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

          <div>
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
          </div>

          <div className="flex flex-col h-[83%] w-auto overflow-y-auto whitespace-nowrap">
            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Ye}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Cudi}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Ye}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Cudi}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>
            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Ye}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Cudi}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Ye}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Cudi}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Ye}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Cudi}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Ye}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Cudi}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Ye}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Cudi}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Ye}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Cudi}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Ye}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex flex-row space-x-2 items-center overflow-clip">
                <div className="ml-1 sm:ml-2 md:my-2">
                  <img
                    src={Cudi}
                    className="min-w-8 sm:max-w-14 md:max-w-20 rounded-lg"
                  ></img>
                </div>
                <div className="text-xs sm:text-base md:text-xl">
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
        <div className="flex  h-[5%] sticky justify-between items-center mb-1 mt-2 mx-2 rounded-lg gradient-bg">
          <div className="justify-start ml-6 space-x-2">
            <a href="#" className=" text-gray-500">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <a href="#" className=" text-gray-500">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>

          <div className="justify-end space-x-4 mr-4">
            <a
              href="#"
              className="font-extrabold text-white text-xs sm:text-base md:text-xl"
            >
              Sign up
            </a>
            <button className="font-extrabold bg-white text-black rounded-full text-xs sm:text-base md:text-xl">
              Log In
            </button>
          </div>
        </div>

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

              <div>
                <br></br>
                <div className="flex flex-wrap space-y-2 sm:space-y-0 align-center justify-between mx-5 sm:mx-8 rounded-lg h-1/6">
                  <div className="flex flex-col">
                    <h2 className="font-bold">Company</h2>
                    <a className="underline">About</a>
                    <a className="underline">Jobs</a>
                    <a className="underline">For the Record</a>
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="font-bold">Communities</h2>
                    <a className="underline">For Artists</a>
                    <a className="underline">Developers</a>
                    <a className="underline">Advertising</a>
                    <a className="underline">Investors</a>
                    <a className="underline">Vendors</a>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">Useful links</h2>
                    <a className="underline">Support</a>
                    <a className="underline">Free Mobile App</a>
                  </div>
                  <div className="flex flex-col items-left">
                    <div className="flex text-xs sm:text-base  md:text-2xl">
                      <button
                        type="button"
                        class="text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full p-2.5 text-center inline-flex items-center me-2"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </button>

                      <button
                        type="button"
                        class="text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full p-2.5 text-center inline-flex items-center me-2"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </button>

                      <button
                        type="button"
                        class="text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full p-2.5 text-center inline-flex items-center me-2"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </button>
                    </div>
                  </div>
                </div>
                <br />

                <hr className="mx-4 sm:mx-6 md:mx-6"></hr>

                <br />

                <div>
                  <div className="flex flex-wrap space-x-4 ml-4 sm:ml-6 md:ml-6 mb-4 rounded-lg text-gray-500 text-sm">
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
    </div>
  );
}

export default App;
