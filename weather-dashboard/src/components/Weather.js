import React, { useState } from "react";
import Logo from "./images/weather1.png";
import Sunrise from "./images/sunrise.png";
import Sunset from "./images/sunset.png";

function Weather() {
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  const handleClick = () => {
    console.log(select);
  };

  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <div className="bg-slate-300">
        <div className="flex justify-between text-black border-b-2 py-2 max-w-6xl mx-auto">
          <div className="flex gap-5">
            <div className="flex border border-1 border-cyan-800 rounded-lg bg-cyan-400 py-2">
              <h1 className="font-bold px-2 ">WEATHER APP</h1>
              <img src={Logo} alt="logo" className="w-16 h-10 px-2" />
            </div>
            <div className="flex">
              <div className="mt-2 px-4">
                <label className="pr-4">Select City:</label>
                <select
                  className="border border-1 border-black w-36 h-8"
                  onChange={handleChange}
                >
                  <option className="border border-1 border-black" value="Pune">
                    Pune
                  </option>
                  <option
                    className="border border-1 border-black"
                    value="Mumbai"
                  >
                    Mumbai
                  </option>
                  <option
                    className="border border-1 border-black"
                    value="Jalgaon"
                  >
                    Jalgaon
                  </option>
                  <option
                    className="border border-1 border-black"
                    value="Bhalod"
                  >
                    Bhalod
                  </option>
                  <option
                    className="border border-1 border-black"
                    value="London"
                  >
                    London
                  </option>
                  <option
                    className="border border-1 border-black"
                    value="Delhi"
                  >
                    Delhi
                  </option>
                  <option
                    className="border border-1 border-black"
                    value="Texas"
                  >
                    Texas
                  </option>
                  <option
                    className="border border-1 border-black"
                    value="Thane"
                  >
                    Thane
                  </option>
                  <option
                    className="border border-1 border-black"
                    value="Ranchi"
                  >
                    Ranchi
                  </option>
                </select>
              </div>
              <div>
                <button
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  type="submit"
                  onClick={handleClick}
                >
                  add
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              reload
            </button>
          </div>
        </div>
      </div>

      {/* Data/Cards */}
      <div className="grid grid-cols-3 mx-auto px-6 py-3 my-3">
        <div className="max-h-screen w-full h-full max-w-sm p-4 border-4 border-gray-200 rounded-3xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-900 bg-gray-100">
          <ul>
            <li
              id="name-city-btn"
              className="flex gap-x-2 mx-auto justify-center text-xl border-b-2 border-blue-400 pb-2"
            >
              <p>Mumbai,</p>
              <p>(India)</p>
            </li>
            <li
              id="weather-condition"
              className="font-semi-bold text-lg text-right py-4"
            >
              <p>Clear Sky</p>
            </li>
            <li className="temp text-6xl font-medium py-4 text-orange-400">
              <p className="">
                35 <span className="text-4xl">°C</span>
              </p>
            </li>
            <li id="feels_temp" className="text-lg">
              Feels Like: 32 °C
            </li>

            <li className="minMaxTemp flex gap-x-2 mx-auto justify-center text-base py-2">
              <p>Min: 30 °c</p>
              <p>Max: 36 °c</p>
            </li>
            <li className="flex justify-around py-4" id="SunsetSunrise">
              <div id="sunrise" className="">
                <img src={Sunrise} alt="Sunrise" className="w-10 h-10"></img>
                <p>Sunrise: 06.45</p>
              </div>
              <div id="sunset" className="">
                <img src={Sunset} alt="Sunset" className="w-10 h-10"></img>
                <p>Sunset: 06.30</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white max-h-screen w-full h-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          Two
        </div>
        <div className="bg-white max-h-screen w-full h-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          Three
        </div>
      </div>
    </div>
  );
}

export default Weather;
