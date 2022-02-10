import React from "react";
import { BiUserCircle } from "react-icons/bi";

const UserHead = () => {
  return (
    <div className="flex fixed top-38 z-50 right-0 left-0 bg-white justify-between items-center py-3 px-5 lg:px-10 shadow border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <BiUserCircle className="w-10 h-10 font-light text-gray-500" />
        <div className="flex flex-col -space-y-1">
          <span className="text-sm text-gray-500">Owner</span>
          <span className="font-semibold">Ram Timalsina</span>
        </div>
      </div>
      <div>
        <a
          href="/"
          className="text-red-700 border-b-2 border-red-700 pb-2 font-bold"
        >
          Contact Now
        </a>
      </div>
    </div>
  );
};

export default UserHead;
