import "../App.css";
import React from "react";
import Ye from "../assets/ye.jpg";
import Cudi from "../assets/cudi.jpg";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <div className="flex  h-[5%] sticky justify-between items-center mb-1 mt-2 mx-2 rounded-lg gradient-bg">
        <div className="justify-start ml-6 space-x-2">
          <a href="#" className=" text-gray-500">
            &lt;
          </a>
        </div>

        <div className="justify-end space-x-4 mr-4">
          <a
            href="#"
            className="font-extrabold text-white text-xs sm:text-base 2xl:text-xl"
          >
            Sign up
          </a>
          <button className="font-extrabold bg-white text-black rounded-full text-xs sm:text-base 2xl:text-lg">
            Log In
          </button>
        </div>
      </div>

      <div className="h-3/4" style={{ "background-color": "#1e1e1e" }}>
        <div className="flex justify-between items-center py-2 ml-0 sm:mt-4 sm:ml-4 h-auto">
          <a className="text-2xl sm:text-3xl md:text-5xl font-semibold underline home-headers">
            Today's Biggest Hits
          </a>
          <a className=" invisible w-0 sm:w-auto sm:visible mr-0 sm:mr-4 underline">
            Show all
          </a>
        </div>

        <div className="flex whitespace-nowrap space-x-4 align-center my-4 sm:mx-4 overflow-x-auto no-scrollbar">
          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-3/4" style={{ "background-color": "#1e1e1e" }}>
        <div className="flex justify-between items-center py-2 ml-0 sm:mt-4 sm:ml-4 h-auto">
          <a className="text-2xl sm:text-3xl md:text-5xl font-semibold underline home-headers">
            Made For Ghiasy
          </a>
          <a className=" invisible w-0 sm:w-auto sm:visible mr-0 sm:mr-4 underline">
            Show all
          </a>
        </div>

        <div className="flex whitespace-nowrap space-x-4 align-center my-4 sm:mx-4 overflow-x-auto no-scrollbar">
          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-3/4" style={{ "background-color": "#1e1e1e" }}>
        <div className="flex justify-between items-center py-2 ml-0 sm:mt-4 sm:ml-4 h-auto">
          <a className="text-2xl sm:text-3xl md:text-5xl font-semibold underline home-headers">
            Daily Radio
          </a>
          <a className=" invisible w-0 sm:w-auto sm:visible mr-0 sm:mr-4 underline">
            Show all
          </a>
        </div>

        <div className="flex whitespace-nowrap space-x-4 align-center my-4 sm:mx-4 overflow-x-auto no-scrollbar">
          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-3/4" style={{ "background-color": "#1e1e1e" }}>
        <div className="flex justify-between items-center py-2 ml-0 sm:mt-4 sm:ml-4 h-auto">
          <a className="text-2xl sm:text-3xl md:text-5xl font-semibold underline home-headers">
            New Listens
          </a>
          <a className=" invisible w-0 sm:w-auto sm:visible mr-0 sm:mr-4 underline">
            Show all
          </a>
        </div>

        <div className="flex whitespace-nowrap space-x-4 align-center my-4 sm:mx-4 overflow-x-auto no-scrollbar">
          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Ye} className="h-auto w-full"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kanye West</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="flex card-gradient card-hover flex-col p-4 rounded-lg w-64 h-72 justify-center space-y-2">
            <img src={Cudi} className="h-auto w-auto"></img>
            <h2 className=" text-base  sm:text-xl md:text-2xl">Kid Cudi</h2>
            <p className=" text-gray-400">Top tracks from this artist!</p>{" "}
            <button class="floating w-12 text-white bg-green-500 focus:outline-none rounded-full p-2.5 text-center items-center me-2">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
