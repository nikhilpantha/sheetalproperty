import React from "react";
import { FaHeart, FaRegHeart, FaUserCircle } from "react-icons/fa";

const PropertyCard = () => {
  return (
    <div className="grid sm:grid-cols-5 items-center border border-gray-200 shadow-xl rounded overflow-hidden">
      <img
        src="/fetured/unsplash_178j8tJrNlc.png"
        alt="/fetured/unsplash_178j8tJrNlc"
        className="w-full h-full sm:col-span-2"
      />
      <div className="p-5 sm:col-span-3  space-y-4 text-sm lg:text-base">
        <div className="flex items-center space-x-3">
          <FaUserCircle className="text-red-700 w-10 h-10" />
          <div className="flex flex-col">
            <span>Owner</span>
            <span className="capitalize font-light">Shyam Gurung</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="font-light">4 BHK House</span>
            {true ? (
              <FaHeart className="w-7 h-7 text-red-700" />
            ) : (
              <FaRegHeart className="w-5 h-5 text-red-700" />
            )}
          </div>
          <div className="flex justify-between font-bold">
            <span>Rs. 10 Cr.</span>
            <span>2025 sq.ft.</span>
          </div>
        </div>

        <div className="font-light">Golfutar, Kathmandu</div>
        <div className="flex justify-end">
          <a
            href="/singleProduct"
            className="text-white px-3 py-2 rounded bg-red-700"
          >
            View Property
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
