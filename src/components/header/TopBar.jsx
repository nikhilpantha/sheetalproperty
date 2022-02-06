import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="px-10 py-3 shadow flex justify-between items-center">
      <img src="shetallogo.png" alt="shetallogo.png" className="w-32 h-16" />
      <div className="flex space-x-7 items-center">
        <div className="text-red-700 capitalize font-semibold flex items-center space-x-2">
          <span>Login / Register</span>
          <RiArrowDownSLine className="w-5 h-5" />
        </div>
        <a
          href="/"
          className="px-4 py-2 bg-red-700 text-white capitalize rounded-md"
        >
          post property{" "}
        </a>
      </div>
    </div>
  );
};

export default TopBar;
