import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const ExtraValue = () => {
  return (
    <div className="p-10 border-y-2 border-gray-200 grid grid-cols-3 items-center">
      <div className="flex flex-col space-y-5">
        <p className="text-lg">
          Know the{" "}
          <span className="font-bold text-black text-xl">exact value </span>of a
          property
        </p>
        <div>
          <button className="text-sm text-white bg-green-500 rounded p-1">
            free
          </button>
        </div>
        <div>
          <button className="text-white px-5 py-3 bg-red-700 rounded-lg">
            Request valuation
          </button>
        </div>
      </div>
      <ul className="space-y-3">
        <li className="flex space-x-3 items-center">
          <BsCheckCircleFill className="text-blue-500 w-5 h-5" />
          <span>Get pre-approved Home Load Assistance</span>
        </li>
        <li className="flex space-x-3 items-center">
          <BsCheckCircleFill className="text-blue-500 w-5 h-5" />
          <span>Sell/Buy at Max./Min. price</span>
        </li>
        <li className="flex space-x-3 items-center">
          <BsCheckCircleFill className="text-blue-500 w-5 h-5" />
          <span>Valuation Certificate to negotiate</span>
        </li>
      </ul>
      <img src="image1.png" alt="image1.png" className="h-full rounded-lg" />
    </div>
  );
};

export default ExtraValue;
