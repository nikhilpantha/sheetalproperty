import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const SingleRate = ({ item }) => {
  console.log(item);
  return (
    <div className="md:p-5 lg:py-10">
      <div className="grid grid-cols-2">
        <div className="font-bold text-2xl">{item.title}</div>
        <div className="flex space-x-5 items-center">
          <span className="text-gray-500 text-sm">For</span>
          <select className="w-32 uppercase border border-gray-500 p-1">
            {item.dropdown.map((drop, index) => (
              <option key={index} className="">
                {drop}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 items-center py-16 gap-16 border-b-2 lg:border-none">
        <img
          src={item.image}
          alt={item.image}
          className="w-full h-auto border border-gray-200 lg:col-span-3"
        />
        <div className="lg:col-span-2 space-y-3">
          <div className="text-xl font-bold pb-5">
            Top {item.location.length + 1} Locality
          </div>
          {item.location.map((loacl, index) => (
            <div key={index} className="flex space-x-3 items-center">
              <input type="radio" className="w-5 h-5" />
              <div className="flex space-x-2 md:space-x-3 items-center">
                <span className="text-sm xs:text-base xl:text-xl">
                  {loacl.title}
                </span>
                <span className="text-gray-500 text-sm">
                  See {loacl.number} properties
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleRate;
