import React from "react";
import Ye from "../assets/ye.jpg";
import Cudi from "../assets/cudi.jpg";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleDown,
  faBell,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

const CLIENT_ID = "66acc71a6f324859a415c9ef4414b4e2";
const CLIENT_SECRET = "c52b5d1a22574cd9b5f30afdf317435e";
const COLORS = ["bg-green-500", "bg-purple-500", "bg-red-500", "bg-blue-500"];

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  // Search
  async function search(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    console.log("SI" + searchInput.target.value);
    //console.log(form);

    // GET request for Artist ID
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" +
        searchInput.target.value +
        "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    // Grab all Albums
    var albums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_group=album&market=US&limit=40",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });

    // Display
  }

  console.log(albums);

  return (
    <div className="">
      <div className="flex w-full h-[5%] mt-0 pt-0 sticky justify-between items-center mb-1 rounded-lg gradient-bg">
        <div className=" ml-6 flex items-center">
          <button
            href="#"
            className="text-white bg-black bg-opacity-60  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full py-1 px-3 text-center inline-flex items-center me-2"
            title="Go back"
          >
            &lt;
          </button>

          <form method="post" onSubmit={search} className="ml-2">
            <input
              name="myInput"
              onChange={setSearchInput}
              placeholder="What do you want to listen to?"
              className=" p-2 rounded-full"
            ></input>
          </form>
        </div>

        <div className="justify-end space-x-4 mr-4">
          <button className="font-extrabold hidden sm:inline-block bg-black text-white bg-opacity-60 rounded-full text-xs sm:text-base 2xl:text-lg py-1 px-3">
            <FontAwesomeIcon icon={faCircleDown} className="mr-1" />
            Install App
          </button>
          <button
            type="button"
            title="What's New"
            className="text-white bg-gray-500 bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full p-2.5 text-center inline-flex items-center me-2"
          >
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button
            type="button"
            className="text-white bg-gray-500 bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full p-2.5 text-center inline-flex items-center me-2"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      <div className="h-[90%] min-h-[90%]">
        <h2 className="text-2xl sm:text-4xl font-bold m-1 sm:m-4">
          Browse all
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  auto-rows-auto justify-items-center">
          {albums.map((album, i) => {
            console.log(album);

            return (
              <div
                className={`w-56 h-64 sm:w-56 sm:h-72 md:w-64 lg:w-80 lg:h-80 m-2 ${
                  COLORS[Math.floor(Math.random() * 4)]
                } overflow-hidden rounded-lg`}
              >
                <div>
                  <h3 className=" text-3xl sm:text-4xl 4xl:text-5xl font-semibold pl-6 mt-6 md:mb-4 w-full">
                    {album.name}
                  </h3>
                  <img
                    src={album.images[0].url}
                    className="none rotate-[24deg] scale-[80%] sm:scale-[90%] md:scale-[80%] translate-x-10 sm:translate-x-16 md:translate-x-20 translate-y-4 sm:translate-y-8 lg:translate-y-0"
                  ></img>
                </div>
              </div>
            );
          })}

          <div className="w-56 h-64 sm:w-56 sm:h-72 md:w-64 lg:w-80 lg:h-80 m-2 bg-blue-500 overflow-hidden rounded-lg">
            <h3 className=" text-3xl sm:text-4xl md:text-5xl font-semibold pl-6 mt-6 md:mb-4 w-5/6">
              Hip-Hop
            </h3>
            <img
              src={Cudi}
              className=" rotate-[24deg] scale-[80%] sm:scale-[90%] md:scale-[80%] translate-x-10 sm:translate-x-16 md:translate-x-20 translate-y-4 sm:translate-y-8 lg:translate-y-0"
            ></img>
          </div>

          <div className="w-56 h-64 sm:w-56 sm:h-72 md:w-64 lg:w-80 lg:h-80 m-2 bg-green-500 overflow-hidden rounded-lg">
            <h3 className=" text-3xl sm:text-4xl md:text-5xl font-semibold pl-6 mt-6 md:mb-4 w-5/6">
              Hip-Hop
            </h3>
            <img
              src={Ye}
              className=" rotate-[24deg] scale-[80%] sm:scale-[90%] md:scale-[80%] translate-x-10 sm:translate-x-16 md:translate-x-20 translate-y-4 sm:translate-y-8 lg:translate-y-0"
            ></img>
          </div>

          <div className="w-56 h-64 sm:w-56 sm:h-72 md:w-64 lg:w-80 lg:h-80 m-2 bg-purple-500 overflow-hidden rounded-lg">
            <h3 className=" text-3xl sm:text-4xl md:text-5xl font-semibold pl-6 mt-6 md:mb-4 w-5/6">
              Hip-Hop
            </h3>
            <img
              src={Cudi}
              className=" rotate-[24deg] scale-[80%] sm:scale-[90%] md:scale-[80%] translate-x-10 sm:translate-x-16 md:translate-x-20 translate-y-4 sm:translate-y-8 lg:translate-y-0"
            ></img>
          </div>

          <div className="w-56 h-64 sm:w-56 sm:h-72 md:w-64 lg:w-80 lg:h-80 m-2 bg-red-500 overflow-hidden rounded-lg">
            <h3 className=" text-3xl sm:text-4xl md:text-5xl font-semibold pl-6 mt-6 md:mb-4 w-5/6">
              Hip-Hop
            </h3>
            <img
              src={Ye}
              className=" rotate-[24deg] scale-[80%] sm:scale-[90%] md:scale-[80%] translate-x-10 sm:translate-x-16 md:translate-x-20 translate-y-4 sm:translate-y-8 lg:translate-y-0"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
