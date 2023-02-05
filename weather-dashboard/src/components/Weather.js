import React, { useState } from "react";

function Weather() {
  const [select, setSelect] = useState("");
  return (
    <div className="py-4  max-w-6xl mx-auto">
      <div className="flex justify-around text-black border-b-2 border-indigo-300 my-4">
        <div className="flex gap-5 justify-center">
          <div className="mt-2">
            <label className="pr-4">Select City:</label>

            <select
              className="border border-1 border-black"
              onChange={(e) => setSelect(e.target.value)}
            >
              <option className="border border-1 border-black" value="Pune">
                Pune
              </option>
              <option className="border border-1 border-black" value="Mumbai">
                Mumbai
              </option>
              <option className="border border-1 border-black" value="Jalgaon">
                Jalgaon
              </option>
              <option className="border border-1 border-black" value="Bhalod">
                Bhalod
              </option>
              <option className="border border-1 border-black" value="London">
                London
              </option>
              <option className="border border-1 border-black" value="Delhi">
                Delhi
              </option>
              <option className="border border-1 border-black" value="Texas">
                Texas
              </option>
              <option className="border border-1 border-black" value="Thane">
                Thane
              </option>
              <option className="border border-1 border-black" value="Ranchi">
                Ranchi
              </option>
            </select>
          </div>
          <div>
          <button
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="submit"
          >
            add
          </button>
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
  );
}

export default Weather;
