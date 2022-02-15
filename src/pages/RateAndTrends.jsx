import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { rateAndTrand } from "../components/Object/rateAndTrand";
import SingleRate from "../components/RateAndTrends/SingleRate";

const RateAndTrends = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className="text-center py-10 text-2xl">Rate And Trends</div>
      <div className="flex justify-center w-full">
        <div className="flex justify-center w-3/4 lg:w-1/2 border border-gray-300 rounded overflow-hidden">
          <input
            className="w-full p-3"
            placeholder="City, Locality, Projects"
          />
          <button className="bg-red-700 text-white w-auto p-3 whitespace-nowrap">
            Show Trends
          </button>
        </div>
      </div>
      <div className="p-5 border border-gray-500 grid md:grid-cols-2 gap-5 mt-16">
        <div className="flex justify-between md:justify-start space-x-3 items-center border rounded border-gray-500 md:border-none">
          <span className="font-bold lg:text-xl p-2">Trends for Kathmandu</span>
          <RiArrowDownSLine className="w-5 h-5 text-gray-500" />
        </div>
        <div className="flex justify-between md:justify-start md:space-x-10 items-center text-sm lg:text-base">
          <span className="text-sm text-gray-500">For</span>
          <label className="flex space-x-3 items-center">
            <input type="radio" className="w-5 h-5 rounded-full" />{" "}
            <span>location</span>
          </label>
          <label className="flex space-x-3 items-center">
            <input type="radio" className="w-5 h-5 rounded-full" />{" "}
            <span>Projects</span>
          </label>
        </div>
      </div>
      <div className="pt-5">
        {rateAndTrand.map((item, index) => (
          <SingleRate item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RateAndTrends;
