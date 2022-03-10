import React from "react";
import { BiUserCircle } from "react-icons/bi";

const UserHead = ({ setOpen }) => {
  return (
    <div className="flex  bg-white justify-between items-center py-3 px-5 lg:px-10 shadow border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <BiUserCircle className="w-10 h-10 font-light text-gray-500" />
        <div className="hidden sm:flex flex-col -space-y-1">
          <span className=" text-sm text-gray-500">Owner</span>
          <span className="text-sm sm:text-base sm:font-semibold">
            Ram Timalsina
          </span>
        </div>
      </div>
      <div>
        <button
          onClick={() => setOpen(true)}
          className="text-red-700 border-b-2 border-red-700 pb-2 font-bold"
        >
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default UserHead;
