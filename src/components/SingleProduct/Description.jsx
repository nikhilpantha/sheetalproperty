import React from "react";
import { product } from "../Object/product";

const Description = () => {
  return (
    <div className="">
      <div className="border-y-2 border-gray-200 px-5 lg:px-10 py-3 font-bold text-2xl">
        Description
      </div>
      <div className="py-10 px-5 lg:px-10 text-xs md:text-base">
        <p>{product.discription}</p>
        <div className="py-10">
          <ul className="text-gray-700  grid grid-cols-2 w-full md:w-1/2 gap-5">
            <li className="">price</li>
            <li className="font-bold">{product.price}</li>
            <li>Facilities</li>
            <li className="font-bold">{product.facilitie}</li>
            <li>Address</li>
            <li className="font-bold">{product.address}</li>
            <li>Landmarks</li>
            <li className="font-bold">{product.landmarks}</li>
            <li>Facing</li>
            <li className="font-bold">{product.facing}</li>
            <li>Overlooking</li>
            <li className="font-bold">{product.overlooking}</li>
            <li>Flooring</li>
            <li className="font-bold">{product.flooring}</li>
            <li>Water Availability</li>
            <li className="font-bold">{product.waterAvailability}</li>
            <li>Status of Electricity</li>
            <li className="font-bold">{product.electricity}</li>
            <li>Lift</li>
            <li className="font-bold">{product.lift}</li>
            <li>Age of Construction</li>
            <li className="font-bold">{product.construction}</li>
            <li>Units Available</li>
            <li className="font-bold">{product.unitsAvailable}</li>
            <li>Furnishing</li>
            <li className="font-bold">{product.furnishing}</li>
            <li>Type of Ownership</li>
            <li className="font-bold">{product.ownership}</li>
          </ul>
        </div>
        <div className="md:flex justify-between items-center">
          <button className="text-white font-bold bg-red-700 text-lg px-5 py-3 rounded-lg mb-5 md:mb-0">
            Contact Owner
          </button>
          <div className="flex space-x-5 items-center capitalize">
            <span>reports:</span>
            <ul className="flex space-x-3 items-center">
              <li className="border-b border-gray-500 text-gray-500 py-2">
                Sold Out
              </li>
              <li className="border-b border-gray-500 text-gray-500 py-2">
                Wrong info
              </li>

              <li className="border-b border-gray-500 text-gray-500 py-2">
                Broker
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
