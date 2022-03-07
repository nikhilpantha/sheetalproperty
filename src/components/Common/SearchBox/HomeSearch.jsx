import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import InputBox from "./InputBox";
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
          <InputBox />
        </div>
      </div>
    </>
  );
};

export default Search;
