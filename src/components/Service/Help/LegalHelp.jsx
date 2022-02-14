import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const LegalHelp = () => {
  return (
    <div className="grid sm:grid-cols-5 gap-5 items-center lg:gap-10 p-5 md:p-10">
      <div className="w-full sm:col-span-2">
        <img
          src="happy-young-asian-couple-realtor-agent1.png"
          alt="happy-young-asian-couple-realtor-agent1.png"
          className="w-full bg-cover rounded"
        />
      </div>
      <div className="space-y-5 w-full md:space-y-10 sm:col-span-3">
        <h1 className="flex flex-col md:space-y-3 md:font-light text-xl lg:text-4xl capitalize ">
          <span className="text-red-700">Pay your rent online</span>
          <span>at Shetal Real State</span>
        </h1>
        <div className="grid md:grid-cols-2 md:gap-5">
          <div className="flex items-center space-x-3">
            <AiFillCheckCircle className="w-5 h-5 text-blue-500" />
            <span className="text">Best offers from 20+ banks</span>
          </div>
          <div className="flex items-center space-x-3">
            <AiFillCheckCircle className="w-5 h-5 text-blue-500" />
            <span className="text">Dedicated loan advisor</span>
          </div>
          <div className="flex items-center space-x-3">
            <AiFillCheckCircle className="w-5 h-5 text-blue-500" />
            <span className="text">Loan options for all</span>
          </div>
          <div className="flex items-center space-x-3">
            <AiFillCheckCircle className="w-5 h-5 text-blue-500" />
            <span className="text">Easy application process</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalHelp;
