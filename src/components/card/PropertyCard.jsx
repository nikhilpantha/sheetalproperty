import React from "react";

const FearuredCard = () => {
  return (
    <div className="w-56 sm:w-80 bg-white rounded-md shadow-lg border border-gray-100">
      <div className="rounded-md overflow-hidden">
        <img
          src="unsplash.png"
          alt="unsplash"
          className="w-full bg-center h-44 sm:h-56"
        />
        <div className="px-3 py-5 space-y-3">
          <h1 className="font-semibold">Home Loans</h1>
          <div className="text-gray-600 text-sm">
            View and compare best offers and apply online.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FearuredCard;
