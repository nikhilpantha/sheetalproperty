import React from "react";

const FearuredCard = () => {
  return (
    <a
      href="/singleProduct"
      className="block w-56 sm:w-80 bg-white rounded-md shadow-lg border-2 border-gray-200"
    >
      <div className="rounded-md overflow-hidden">
        <img
          src="unsplash.png"
          alt="unsplash"
          className="w-full bg-center h-44 sm:h-48"
        />
        <div className="p-3 space-y-2 pb-7 ">
          <h1 className="text-gray-700 text-xl">Home Loans</h1>
          <div className="text-gray-500 font-light">
            View and compare best offers and apply online.
          </div>
        </div>
      </div>
    </a>
  );
};

export default FearuredCard;
