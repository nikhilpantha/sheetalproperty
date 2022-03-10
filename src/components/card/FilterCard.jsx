import React from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { product } from "../Object/product";

const FilterCard = () => {
  return (
    <Link to="/singleProduct">
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 w-full relative bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
        <div>
          <div className="rounded-b px-3 py-0.5 font-semibold absolute top-0 bg-red-700 text-sm text-white uppercase">
            For {product.PropertyStatus}
          </div>
          <img
            src="/unsplash.png"
            alt="unsplash"
            className="w-full bg-center h-full bg-cover"
          />
        </div>
        <div className="rounded-md overflow-hidden sm:col-span-2 lg:col-span-3">
          <div className="p-5 sm:p-7 xl:pr-10 space-y-5 font-light">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-bold text-gray-600 text-xl">
                  {product.title}
                </h1>
                <h1 className="text-sm">from {product.address} </h1>
              </div>
              <FiHeart className="w-8 h-8 text-red-700" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-5">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Price</span>
                <span className="font-medium">{product.price}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Land area</span>
                <span className="font-medium">{product.superArea}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Per aana</span>
                <span className="font-medium">{product.PerAana}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Road side</span>
                <span className="font-medium">{product.RoadSide}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Road type</span>
                <span className="font-medium">{product.RoadType}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Property Status</span>
                <span className="font-medium">{product.PropertyStatus}</span>
              </div>
            </div>
            <div className="flex  justify-end">
              <button className="bg-red-700 rounded text-white font-medium px-5 py-2 w-full sm:w-auto">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilterCard;
