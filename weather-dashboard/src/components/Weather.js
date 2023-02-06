import React, { useState } from "react";
import Logo from "./images/weather1.png";
import Sunrise from "./images/sunrise.png";
import Sunset from "./images/sunset.png";
import "./weather.css";
// import Background from "./images/background.jpg"

function Weather() {
  const [select, setSelect] = useState("");
  const [data, setData] = useState(null);

  //as per we change value on dropdown it get setted in select state
  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const reLoad = () => {
    window.location.reload();
  };
  //after clicking on add it executes
  const handleClick = () => {
    console.log("hi");

    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${select}&units=metric&appid=3f256663324712b90cf713a480e25f6d
          `;
      const response = await fetch(url);
      const resJson = await response.json();
      //we are setting response in state
      setData(resJson);
    };
    setTimeout(() => {
      fetchApi();
    }, 1000);
  };

  return (
    <div className="bg-slate-200 max-h-full" id="weather">
      {/* Navbar */}
      <div className="bg-gradient-to-r from-slate-300 to-gray-200">
        <div className="flex justify-between text-black border-b-2 py-2 max-w-6xl mx-auto">
          <div className="flex gap-5">
            <div className="flex border border-1 border-cyan-300 rounded-lg bg-cyan-200 py-2">
              <h1 className="font-bold px-2 text-2xl text-fuchsia-500">
                WEATHER APP
              </h1>
              <img src={Logo} alt="logo" className="w-16 h-10 px-2" />
            </div>
            <div className="flex gap-x-4">
              <div className="flex gap-x-4 justify-items-center">
                <label className="pt-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Select City:
                </label>
                <select
                  className="h-10 w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
                >
                  <option selected>Choose a City</option>

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
              <div className="flex">
                <div className="px-4">
                  <input
                    type="search"
                    className="h-10 w-100 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center placeholder:text-center"
                    onChange={handleChange}
                    placeholder="Enter City & Search"
                  />
                </div>
                <div>
                  <button
                    onClick={handleClick}
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={reLoad}
            >
              reload
            </button>
          </div>
        </div>
      </div>

      {/* Data/Cards */}

      {!data ? (
        <p className="flex text-center h-full justify-center justify-items-center py-64 bg-slate-200 text-3xl">
          Please Select City Name Or Search To See It's Weather Condition
        </p>
      ) : (
        <div className="mx-auto px-12 py-3 my-3  max-w-xl max-h-full">
          <div className="max-h-full  p-4 border-4 border-gray-400 rounded-3xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-900  bg-gradient-to-r from-cyan-100 to-blue-300">
            <ul>
              <li
                id="name-city-btn"
                className="flex gap-x-2 mx-auto justify-center text-xl border-b-2 border-blue-400 pb-2"
              >
                <p>{data.name}</p>
                <p>({data.sys.country})</p>
              </li>
              <li
                id="weather-condition"
                className="font-semi-bold text-lg text-right py-4"
              >
                <p>Clear Sky</p>
              </li>
              <li className="temp text-6xl font-medium py-4 text-orange-400">
                <p className="">
                  {data.main.temp} <span className="text-4xl">°C</span>
                </p>
              </li>
              <li id="feels_temp" className="text-lg">
                Feels Like: {data.main.feels_like} °C
              </li>

              <li className="minMaxTemp flex gap-x-2 mx-auto justify-center text-base py-2">
                <p>Min: {data.main.temp_min} °c</p>
                <p>Max: {data.main.temp_max} °c</p>
              </li>
              <li className="flex justify-around py-4" id="SunsetSunrise">
                <div id="sunrise" className="flex justify-center flex-col">
                  <img
                    src={Sunrise}
                    alt="Sunrise"
                    className="w-10 h-10 block"
                  ></img>
                  <p>
                    Sunrise:{" "}
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                  </p>
                </div>
                <div id="sunset" className="flex justify-center flex-col">
                  <img
                    src={Sunset}
                    alt="Sunset"
                    className="w-10 h-10 block"
                  ></img>
                  <p>
                    Sunset:{" "}
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                  </p>
                </div>
              </li>
              <li>
                <p>{new Date(data.sys.sunrise * 1000).toLocaleDateString()}</p>
              </li>
            </ul>
          </div>
          {/* <div className="bg-white max-h-screen w-full h-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            Two
          </div>
          <div className="bg-white max-h-screen w-full h-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            Three
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Weather;
