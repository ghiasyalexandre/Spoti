import "../App.css";
import React from "react";
import Ye from "../assets/ye.jpg";
import Cudi from "../assets/cudi.jpg";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from 'react';

const CLIENT_ID = "66acc71a6f324859a415c9ef4414b4e2";
const CLIENT_SECRET = "c52b5d1a22574cd9b5f30afdf317435e";

export default function Home() {

  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
  var authParameters = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
  }
  fetch('https://accounts.spotify.com/api/token', authParameters)
  .then(result => result.json())
  .then(data => setAccessToken(data.access_token))
  
}, [])

// Search
async function search(e)
{
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    console.log(searchInput.target.value);
    //console.log(form);

    // GET request for Artist ID
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + accessToken
      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
    .then(response => response.json())
    .then(data => { return data.artists.items[0].id} )

    // Grab all Albums
    var albums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_group=album&market=US&limit=50', searchParameters)
   .then(response => response.json())
   .then(data => {
    console.log(data);
    setAlbums(data.items);
   }
   );
   
    // Display

}

console.log(albums);

  return (
    <div className=" overflow-x-hidden">

<form method='post' onSubmit={search}>
        <input name="myInput" onChange={setSearchInput} placeholder='Search'></input>
        <button type="reset">Reset</button>
        <button type="submit" id='action' name='action' >Submit</button>
      </form>

<div>
        <div className='grid'>
          {albums.map( (album, i) => {
            console.log(album);

            return (
              <div className='card'>

                <img src={album.images[0].url} />
                <h2>{album.name}</h2>
              </div>
            );
          })
          }
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
