import React, { useState } from "react";
import Logo from "./images/weather1.png";
import Sunrise from "./images/sunrise.png";
import Sunset from "./images/sunset.png";
import Delete from "./images/delete.jpg";
import "./weather.css";
import Data from "../config.json";

// import Background from "./images/background.jpg"

function Weather() {
  const [select, setSelect] = useState("");
  const [data, setData] = useState(null);
  const [completeData, setCompleteData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showHome] = useState(true);

  //as per we change value on dropdown it get setted in select state
  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  //after clicking on reload
  const reLoad = () => {
    window.location.reload();
  };
  //after clicking on add it executes
  const handleClick = () => {
    setShowLoader(true);

    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${select}&units=metric&appid=3f256663324712b90cf713a480e25f6d
          `;
      const response = await fetch(url);
      const resJson = await response.json();
      //we are setting response in state
      // console.log(resJson.name)
      setData(resJson);
      if (resJson) {
        setShowLoader(false);
      }
      setCompleteData(() => [...completeData, data]);
      console.log("dddddd", completeData);

      //fixed the issue when we pass city which is inValid
      if (resJson.name === select) {
        console.log("yessssss");
      } else {
        alert(`please Enter Valid City!!!`);
        window.location.reload(false);
      }
    };

    setTimeout(() => {
      fetchApi();
    }, 200);
  };

  const DeleteWeather = () => {
    window.location.reload();
  };

  const handleConvert = () => {
    let celcius = document.getElementById("c");
    let faren = document.getElementById("f");

    if (
      !faren.classList.contains("hidden") &&
      celcius.classList.contains("hidden")
    ) {
      faren.classList.add("hidden");
      celcius.classList.remove("hidden");
    } else {
      faren.classList.remove("hidden");
      celcius.classList.add("hidden");
    }
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

                  {Data.map((city, index) => (
                    <option
                      className="border border-1 border-black"
                      key={index}
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  type="submit"
                  onClick={handleClick}
                >
                  Show Weather
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
      {showLoader && !data && (
        <div role="status" className="bg-white text-center flex justify-center">
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      )}
      {/* Data/Cards */}

      {!data && showHome ? (
        <p className="flex text-center h-full justify-center justify-items-center py-64 bg-slate-200 text-3xl">
          Please Select City Name OR Enter City To See It's Weather Condition!
        </p>
      ) : (
        // completeData && completeData.map((data,index) => (
        //   <div key={index}>
        //     {cityData}.name}
        //   </div>
        //     )
        // )
        <div className="mx-auto px-12 py-3 my-3  max-w-xl max-h-full">
          <div className="max-h-full  p-4 border-4 border-gray-400 rounded-3xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-900  bg-gradient-to-r from-cyan-100 to-blue-300">
            <ul>
              <li
                id="name-city-btn"
                className="flex gap-x-2 mx-auto justify-between text-xl border-b-2 border-blue-400 pb-2 font-xl font-bold text-gray-900 dark:text-white"
              >
                <div className="flex gap-x-4">
                  <p>{data.name},</p>
                  <p>{data.sys.country}</p>
                </div>

                <div className="text-right">
                  <button onClick={DeleteWeather}>
                    <img src={Delete} className="h-5 w-5" />
                  </button>
                </div>
              </li>
              <li className="">
                <div className="flex justify-between">
                  <div className="">
                    <div className="px-8">
                      <img
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        className="h-16 w-16"
                      />
                    </div>
                    <div className="text-left px-8">
                      <p className="">{data.weather[0].description}</p>
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      {new Date(data.sys.sunrise * 1000).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </li>

              <li
                id="weather-condition"
                className="font-semi-bold text-lg text-right py-4"
              >
                {/* <p>Clear Sky</p> */}
              </li>
              <li className="temp text-5xl font-medium pb-4 text-orange-400">
                <p className="">
                  <span className="text-5xl hidden" id="f">
                    {((data.main.temp * 9) / 5 + 32).toFixed(2)} F
                  </span>
                  <span className="text-5xl" id="c">
                    {" "}
                    {data.main.temp} °C
                  </span>
                </p>
                <button
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={handleConvert}
                >
                  Convert
                </button>
              </li>
              <li
                id="feels_temp"
                className="text-xl font-semibold text-gray-900 dark:text-white"
              >
                Feels Like: {data.main.feels_like} °C
              </li>

              <li className="minMaxTemp flex gap-x-2 mx-auto justify-center text-sm py-2 font-normal text-gray-900 dark:text-white">
                <p>Min: {data.main.temp_min} °c</p>
                <p>Max: {data.main.temp_max} °c</p>
              </li>
              <li className="flex justify-around py-4" id="SunsetSunrise">
                <div id="sunrise" className="flex justify-center flex-col">
                  <img
                    src={Sunrise}
                    alt="Sunrise"
                    className="w-10 h-10 mx-auto"
                  ></img>
                  <p>
                    Sunrise:
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                  </p>
                </div>
                <div id="sunset" className="flex justify-center flex-col">
                  <img
                    src={Sunset}
                    alt="Sunset"
                    className="w-10 h-10 block mx-auto"
                  ></img>
                  <p>
                    Sunset:{" "}
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
