import React from "react";

const EmiCalculator = () => {
  return (
    <div className="p-5 m-5 lg:m-10 border-2 rounded-lg border-gray-200">
      <h1 className="text-2xl font-light pb-3">
        How much will I have to pay every month?
      </h1>
      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row  justify-between">
        <form className="space-y-5">
          <label className="flex flex-col space-y-3">
            <span className="font-light">Loan Amount</span>
            <input
              type="text"
              className="w-full p-3 text-gray-500 border border-gray-200 rounded"
              placeholder="Rs.25,00,000"
            />
          </label>
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="flex flex-col space-y-3">
              <span className="font-light">Tenure</span>
              <input
                type="number"
                className="w-full p-3 text-gray-500 border border-gray-200 rounded"
                placeholder="10 yr"
              />
            </label>
            <label className="flex flex-col space-y-3">
              <span className="font-light">Rate of interest</span>
              <input
                type="number"
                className="w-full p-3 text-gray-500 border border-gray-200 rounded"
                placeholder="10 %"
              />
            </label>
          </div>
          <button className="text-white font-semibold bg-red-700 w-full py-3 rounded">
            Calculate your EMI
          </button>
        </form>
        <div className="text-center space-y-5">
          <p className="text-sm font-bold">Yout EMI per month will be</p>
          <p className="text-red-700 font-bold text-xl">Rs. 33,038</p>
          <button className="text-red-700 font-semibold border border-red-700 w-full px-16 py-3 rounded">
            Apply for Loan Instantly
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
