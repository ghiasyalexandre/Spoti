import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer () {

    return (
        <div>
                
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
              
    );
}