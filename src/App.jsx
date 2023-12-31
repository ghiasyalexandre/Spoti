import { useState } from "react";
import Navbar from "./components/navBar";
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
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen w-full bg-black">
      <div className="bg-black w-1/3 lg:w-1/6 sticky resize-none hover:resize">
        <div
          className="rounded-md m-2"
          style={{ "background-color": "#101010" }}
        >
          <div
            className="flex flex-col justify-evenly h-[10%] w-auto py-4 ml-2 space-y-2"
            style={{ "background-color": "#101010" }}
          >
            <a className="flex space-x-3 items-center text-xl">
              <FontAwesomeIcon icon={faHome} color="gray" />
              <h2>Home</h2>
            </a>

            <a className="flex space-x-3 items-center text-xl">
              <FontAwesomeIcon icon={faMagnifyingGlass} color="gray" />
              <h2>Search</h2>
            </a>
          </div>
        </div>

        <div
          className="flex flex-col h-[90%] m-2 rounded-md"
          style={{ "background-color": "#101010" }}
        >
          <div className="flex justify-between m-4 font-bold text-gray-500">
            <div className="flex space-x-3 items-center ">
              <FontAwesomeIcon icon={faBook} className="text-xl" />
              <h2 className="text-lg">Your Library</h2>
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
              <div className="flex space-x-2 items-center hover:font-semibold">
                <h3>Recents</h3>
                <FontAwesomeIcon
                  icon={faListUl}
                  style={{ "hover:fontStyle": "bold" }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col h-auto w-auto overflow-auto whitespace-nowrap">
            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Ye} className="h-auto rounded-md"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Cudi} className="h-auto rounded-md"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Ye} className="h-auto rounded-md"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Cudi} className="h-auto rounded-md"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Ye} className="h-auto rounded-md"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Cudi} className="h-auto rounded-md"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Ye} className="h-auto rounded-md"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Cudi} className="h-auto rounded-md"></img>
                </div>
                <div>
                  <h2>Kid Cudi</h2>
                  <p className=" text-gray-400">Playlist &#x2022; Spoti</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Ye} className="h-auto rounded-md"></img>
                </div>
                <div>
                  <h2>808s and Heartbroke</h2>
                  <p className=" text-gray-400">Album &#x2022; Kanye West</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-900">
              <div className="flex flex-row m-2 space-x-2 items-center">
                <div className="w-24">
                  <img src={Cudi} className="h-auto rounded-md"></img>
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
        <div
          className="flex  h-[5%] sticky justify-between items-center w-auto mb-1 mt-2 mx-2 rounded-md"
          style={{ "background-color": "#121212" }}
        >
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
              <div className="flex justify-between items-center mt-2 ml-4 h-auto">
                <div className="text-3xl font-semibold">
                  Today's biggest hits
                </div>
                <a>Show all</a>
              </div>

              <div className="flex whitespace-nowrap space-x-4 items-center mt-4 ml-4 overflow-x-auto no-scrollbar">
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
              </div>

              <div className="h-3/4" style={{ "background-color": "#1e1e1e" }}>
                <div className="flex justify-between items-center mt-2 ml-4 h-auto">
                  <div className="text-3xl font-semibold">
                    Made For Ghiasy Alexandre
                  </div>
                  <a>Show all</a>
                </div>

                <div className="flex whitespace-nowrap space-x-4 items-center mt-4 ml-4 overflow-x-auto no-scrollbar">
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2 ml-4 h-auto">
                <div className="text-3xl font-semibold">
                  Today's biggest hits
                </div>
                <a>Show all</a>
              </div>

              <div className="flex whitespace-nowrap space-x-4 items-center mt-4 ml-4 overflow-x-auto no-scrollbar">
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
              </div>

              <div className="h-3/4" style={{ "background-color": "#1e1e1e" }}>
                <div className="flex justify-between items-center mt-2 ml-4 h-auto">
                  <div className="text-3xl font-semibold">
                    Made For Ghiasy Alexandre
                  </div>
                  <a>Show all</a>
                </div>

                <div className="flex whitespace-nowrap space-x-4 items-center mt-4 ml-4 overflow-x-auto no-scrollbar">
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 ml-4 h-auto">
                <div className="text-3xl font-semibold">
                  Today's biggest hits
                </div>
                <a>Show all</a>
              </div>

              <div className="flex whitespace-nowrap space-x-4 items-center mt-4 ml-4 overflow-x-auto no-scrollbar">
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
              </div>

              <div className="h-3/4" style={{ "background-color": "#1e1e1e" }}>
                <div className="flex justify-between items-center mt-2 ml-4 h-auto">
                  <div className="text-3xl font-semibold">
                    Made For Ghiasy Alexandre
                  </div>
                  <a>Show all</a>
                </div>

                <div className="flex whitespace-nowrap space-x-4 items-center mt-4 ml-4 overflow-x-auto no-scrollbar">
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2 ml-4 h-auto">
                <div className="text-3xl font-semibold">
                  Today's biggest hits
                </div>
                <a>Show all</a>
              </div>

              <div className="flex whitespace-nowrap space-x-4 items-center mt-4 ml-4 overflow-x-auto no-scrollbar">
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Ye} className="h-auto w-full"></img>
                  <h2>Kanye West</h2>
                  <p>Top tracks from this artist!</p>
                </div>

                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
                <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                  <img src={Cudi} className="h-auto w-auto"></img>
                  <h2>Kid Cudi</h2>
                  <p>Top tracks from this artist!</p>
                </div>
              </div>

              <div className="h-3/4" style={{ "background-color": "#1e1e1e" }}>
                <div className="flex justify-between items-center mt-2 ml-4 h-auto">
                  <div className="text-3xl font-semibold">
                    Made For Ghiasy Alexandre
                  </div>
                  <a>Show all</a>
                </div>

                <div className="flex whitespace-nowrap space-x-4 items-center mt-4 ml-4 overflow-x-auto no-scrollbar">
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Ye} className="h-auto w-full"></img>
                    <h2>Kanye West</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                  <div className="flex bg-black flex-col p-2 rounded-md w-64 h-72 justify-center space-y-2">
                    <img src={Cudi} className="h-auto w-auto"></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between ml-4 rounded-md h-1/6 space-y-2">
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
                  <div className="flex flex-col items-center">
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

              <div>
                <div className="flex flex-wrap space-x-4 ml-4 mb-4 rounded-md text-gray-500 text-sm">
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
