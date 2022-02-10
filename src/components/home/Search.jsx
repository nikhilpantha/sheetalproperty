import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <>
      <div className="flex justify-center px-10">
        <div className="w-full xl:w-9/12 -mt-40 bg-white rounded shadow-xl border border-gray-100 p-16 space-y-5">
          <ul className="flex w-4/5 text-lg items-center justify-between font-bold px-5">
            <li>Buy</li>
            <li>Rent</li>
            <li>House & Land</li>
            <li>New Homes</li>
            <li>Invest</li>
          </ul>
          <div className="border-2 text-xl border-gray-600 flex items-center rounded-md hover:border-gray-900 focus:border-red-700 overflow-hidden space-x-5">
            <input
              type={"text"}
              placeholder="Enter an address, neighbourhood, city or ZIP code"
              className="w-full h-full p-7 outline-none"
            />
            <button className="px-3 py-2 space-x-1 flex items-center text-gray-700 border rounded-md border-gray-700">
              <AiOutlineControl className="w-6 h-6" />
              <span>Filters</span>
            </button>
            <div className="p-7 h-full space-x-3 font-medium text-xl flex items-center bg-red-700 text-white">
              <FaSearch className="w-7 h-7" />
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
