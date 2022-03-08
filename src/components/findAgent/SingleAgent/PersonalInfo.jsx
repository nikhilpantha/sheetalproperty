import React from "react";
import { FaStar } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className="flex space-x-5 justify-start">
      <div>
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="rounded-full h-auto w-24"
        />
      </div>
      <div className="flex flex-col space-y-1 text-sm text-gray-500">
        <h1 className="text-red-700">John Gomez</h1>
        <p>Golfutar, Kathmandu</p>
        <p>Shetal Property Premier Agent</p>
        <div className="flex items-center">
          <FaStar className="w-5 h-5 text-red-700" />
          <FaStar className="w-5 h-5 text-red-700" />
          <FaStar className="w-5 h-5 text-red-700" />
          <FaStar className="w-5 h-5 text-red-700" />
          <FaStar className="w-5 h-5 text-red-700" />
        </div>
        <p>35 sales in last 12 months</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
