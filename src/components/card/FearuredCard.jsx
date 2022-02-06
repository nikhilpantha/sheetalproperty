import React from "react";
import { FiHeart } from "react-icons/fi";

const FearuredCard = () => {
  return (
    <div className="w-80 relative bg-white rounded-md shadow-lg">
      <div className="-mt-3 rounded px-2 absolute top-0 bg-red-700 text-white uppercase">
        For sale
      </div>
      <div className="rounded-md overflow-hidden">
        <img
          src="unsplash.png"
          alt="unsplash"
          className="w-full bg-center h-56"
        />
        <div className="px-3 py-5 space-y-3">
          <div className="flex justify-between items-center">
            <h1 className="font-light">4 BHK House </h1>
            <FiHeart className="w-5 h-5 text-red-700" />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">Rs. 10 Cr.</span>
            <span className="font-bold text-xl">2025 sq.ft</span>
          </div>
          <div>Golfutar, Kathmandu</div>
        </div>
      </div>
    </div>
  );
};

export default FearuredCard;
