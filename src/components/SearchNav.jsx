import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleDown,
  faBell,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

export default function SearchNav() {
  return (
    <div className="flex  h-[5%] sticky justify-between items-center mb-1 mt-2 mx-2 rounded-lg gradient-bg">
      <div className="justify-start ml-6 space-x-2">
        <button
          href="#"
          className="text-white bg-black bg-opacity-60 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full py-1 px-3 text-center inline-flex items-center me-2"
          title="Go back"
        >
          &lt;
        </button>
      </div>

      <div className="justify-end space-x-4 mr-4">
        <button className="font-extrabold hidden sm:inline-block bg-black text-white bg-opacity-60 rounded-full text-xs sm:text-base 2xl:text-lg py-1 px-3">
          <FontAwesomeIcon icon={faCircleDown} className="mr-1" />
          Install App
        </button>
        <button
          type="button"
          title="What's New"
          className="text-white bg-gray-500 hover:bg-gray-500 bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full p-2.5 text-center inline-flex items-center me-2"
        >
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button
          type="button"
          className="text-white bg-gray-500 hover:bg-gray-500 bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full p-2.5 text-center inline-flex items-center me-2"
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
}
