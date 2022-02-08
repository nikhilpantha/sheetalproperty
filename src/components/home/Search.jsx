import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <>
      <div className="flex justify-center px-10">
        <div className="w-full xl:w-3/5 -mt-20 bg-white rounded shadow border border-gray-100 p-10 space-y-5">
          <ul className="flex items-center justify-between font-semibold px-5">
            <li>Buy</li>
            <li>Rent</li>
            <li>House & Land</li>
            <li>New Homes</li>
            <li>Invest</li>
          </ul>
          <div className="border-2 border-gray-600 flex items-center rounded-md hover:border-gray-900 focus:border-red-700 overflow-hidden space-x-5">
            <input
              type={"text"}
              placeholder="Enter an address, neighbourhood, city or ZIP code"
              className="p-3 w-full outline-none"
            />
            <button className="px-2 py-1 space-x-1 flex items-center text-gray-700 border rounded-md border-gray-700">
              <AiOutlineControl className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <div className="p-3 space-x-1 flex items-center bg-red-700 text-white">
              <FaSearch className="w-5 h-5" />
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
