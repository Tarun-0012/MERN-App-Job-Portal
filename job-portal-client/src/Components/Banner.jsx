import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMapPin } from "react-icons/hi2";

const Banner = ({ position, handleInputChange, searchLocation }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find Your <span className="text-blue">New Job</span> Today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in the computer, engineering and technology sectors
        are waiting for you.
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div
            className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset
                     focus-within:ring-indigo-600 md:w-1/2 w-full"
          >
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="What position are you looking for?"
              className="block flex-1 border-0 bg-transparent
                py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={position}
            />
            <CiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          <div
            className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset
                 focus-within:ring-indigo-600 md:w-1/3 w-full"
          >
            <input
              type="text"
              name="jobLocation"
              id="jobLocation"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent
                py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={searchLocation}
            />
            <HiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          <button
            type="submit"
            className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
