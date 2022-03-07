import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const InputBox = () => {
  return (
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
  );
};

export default InputBox;
