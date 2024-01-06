import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
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
              className="font-extrabold text-white text-xs sm:text-base 2xl:text-xl"
            >
              Sign up
            </a>
            <button className="font-extrabold bg-white text-black rounded-full text-xs sm:text-base 2xl:text-lg">
              Log In
            </button>
          </div>
        </div>
  );
}
