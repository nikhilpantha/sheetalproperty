import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const Details = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-10 gap-10 px-5 lg:p-10 items-center">
        <img
          src="Services/real-estate-deal-female-smiling-realtor-showing-keys-flat1.png"
          alt="real-estate-deal-female-smiling-realtor-showing-keys-flat 1"
          className="w-full rounded-lg sm:col-span-6 xl:col-span-5"
        />
        <div className="sm:col-span-6 xl:col-span-7 space-y-3">
          <p className="text-2xl text-red-700">Apply Home Loans Online </p>
          <p className=" font-light">at Shetal Real State</p>
          <ul className="grid xl:grid-cols-2 gap-5 py-7">
            <li className="flex items-center space-x-5">
              <BsCheckCircleFill className="w-5 h-5 text-blue-500" />
              <span>Best offers from 20+ banks</span>
            </li>
            <li className="flex items-center space-x-5">
              <BsCheckCircleFill className="w-5 h-5 text-blue-500" />
              <span>Dedicated loan advisor</span>
            </li>
            <li className="flex items-center space-x-5">
              <BsCheckCircleFill className="w-5 h-5 text-blue-500" />
              <span>Easy application process</span>
            </li>
            <li className="flex items-center space-x-5">
              <BsCheckCircleFill className="w-5 h-5 text-blue-500" />
              <span>Loan options for all</span>
            </li>
          </ul>
          <div className="xl:text-right">
            <button className="px-3 py-2 bg-red-700 text-white rounded-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
