import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <>
      <div className="flex justify-center px-5 md:px-10">
        <div className="w-full xl:w-9/12 -mt-20 md:-mt-36 bg-white rounded shadow-xl border border-gray-100 p-3 xs:p-7  md:p-10 lg:space-y-5">
          <ul className="hidden lg:flex w-4/5  text-lg items-center justify-between font-bold px-5">
            <li>Buy</li>
            <li>Rent</li>
            <li>House & Land</li>
            <li>New Homes</li>
            <li>Invest</li>
          </ul>
          <div className="border-2 border-gray-600 flex items-center rounded-md bg-white hover:border-gray-900 focus:ring-2 focus:ring-red-700 overflow-hidden space-x-2 xs:space-x-5">
            <input
              type={"text"}
              placeholder="Enter an address, neighbourhood, city or ZIP code"
              className="w-full h-full p-3 xs:p-5 border-none outline-none"
            />
            <button className="p-1 xs:px-3 xs:py-2 space-x-1 flex items-center text-gray-700 border rounded-md border-gray-700">
              <AiOutlineControl className="hidden xs:inline w-6 h-6" />
              <span>Filters</span>
            </button>
            <div className="p-3 xs:p-5 h-full space-x-3 font-medium text-xl flex items-center bg-red-700 text-white">
              <FaSearch className="w-7 h-7" />
              <span className="hidden md:inline">Search</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
