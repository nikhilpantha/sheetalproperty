import React from "react";
import { product } from "../Object/product";

const Description = () => {
  return (
    <div className="border-b-2 border-gray-300">
      <div className="border-y-2 border-gray-200 px-5 lg:px-10 py-3 font-bold text-2xl">
        Description
      </div>
      <div className="py-10 px-5 lg:px-10 text-xs md:text-base">
        <p className="text-gray-700">{product.discription}</p>
        <div className="py-10">
          <ul className="text-gray-700  grid grid-cols-2 w-full md:w-1/2 gap-5">
            <li className="">price</li>
            <li className="font-medium">{product.price}</li>
            <li>Facilities</li>
            <li className="font-medium">{product.facilitie}</li>
            <li>Address</li>
            <li className="font-medium">{product.address}</li>
            <li>Landmarks</li>
            <li className="font-medium">{product.landmarks}</li>
            <li>Facing</li>
            <li className="font-medium">{product.facing}</li>
            <li>Overlooking</li>
            <li className="font-medium">{product.overlooking}</li>
            <li>Flooring</li>
            <li className="font-medium">{product.flooring}</li>
            <li>Water Availability</li>
            <li className="font-medium">{product.waterAvailability}</li>
            <li>Status of Electricity</li>
            <li className="font-medium">{product.electricity}</li>
            <li>Lift</li>
            <li className="font-medium">{product.lift}</li>
            <li>Age of Construction</li>
            <li className="font-medium">{product.construction}</li>
            <li>Units Available</li>
            <li className="font-medium">{product.unitsAvailable}</li>
            <li>Furnishing</li>
            <li className="font-medium">{product.furnishing}</li>
            <li>Type of Ownership</li>
            <li className="font-medium">{product.ownership}</li>
          </ul>
        </div>
        <div className="md:flex justify-end items-center">
          <div className="flex space-x-5 items-center capitalize">
            <span>reports:</span>
            <ul className="flex space-x-3 items-center">
              <button className="border-b border-gray-500 text-gray-500 py-2">
                Sold Out
              </button>
              <button className="border-b border-gray-500 text-gray-500 py-2">
                Wrong info
              </button>

              <button className="border-b border-gray-500 text-gray-500 py-2">
                Broker
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
