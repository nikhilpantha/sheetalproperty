import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const ExtraValue = () => {
  return (
    <div className="py-10 px-5 lg:p-10 border-y-2 border-gray-200 grid grid-cols-1 gap-5 md:grid-cols-12 xl:grid-cols-11 items-center space-y-5 md:space-y-0">
      <div className="flex flex-col space-y-5 md:col-span-6 xl:col-span-4">
        <p className="text-lg">
          Know the{" "}
          <span className="font-bold text-black text-xl">exact value </span>of a
          property
        </p>
        <div>
          <button className="text-xs font-bold text-white bg-green-500 rounded py-1 px-3">
            Free
          </button>
        </div>
        <div>
          <button className="text-white px-5 py-3 bg-red-700 rounded-lg">
            Request valuation
          </button>
        </div>
      </div>
      <ul className="space-y-3 md:col-span-6 xl:col-span-5">
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
      <div className="hidden xl:block w-full h-full md:col-span-2">
        <img
          src="/image1.png"
          alt="image1.png"
          className="h-full rounded-lg  w-full"
        />
      </div>
    </div>
  );
};

export default ExtraValue;
