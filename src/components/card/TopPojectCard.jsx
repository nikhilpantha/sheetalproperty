import React from "react";

const TopPojectCard = () => {
  return (
    <div className="w-full bg-white rounded-md shadow-lg border-2 border-gray-200 overflow-hidden">
      <div className=" ">
        <img
          src="unsplash.png"
          alt="unsplash"
          className="w-full bg-center h-56"
        />
        <div className="px-3 py-5 space-y-3">
          <h1 className="font-semibold">Budhanilkantha View Tower</h1>
          <ul className="text-gray-600 text-xs sm:text-sm space-y-3">
            <li>by Shetal Real State</li>
            <li>Kathmandu, Nepal</li>
            <li>Vacation House</li>
            <li>
              <b className="text-black">Rs. 2.5 Cr</b> onwards
            </li>
            <li className="text-xs">Marketed by ABC Developers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopPojectCard;
