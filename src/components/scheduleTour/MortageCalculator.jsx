import React from "react";

const MortageCalculator = () => {
  return (
    <div className="rounded-lg">
      <h1 className="text-lg font-semibold pb-5">Mortage Calculator</h1>
      <form className="flex flex-col space-y-5">
        <input
          type={"text"}
          placeholder="Total Amount"
          className="border rounded w-full p-2"
        />
        <input
          type={"text"}
          placeholder="Down Payment"
          className="border rounded w-full p-2"
        />
        <input
          type={"text"}
          placeholder="Interest Rate"
          className="border rounded w-full p-2"
        />
        <input
          type={"text"}
          placeholder="Loan Term (Years)"
          className="border rounded w-full p-2"
        />
        <input
          type={"text"}
          placeholder="Monthly"
          className="border rounded w-full p-2"
        />
        <button className="bg-red-700 text-white font-semibold px-5 py-2 rounded-lg ">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default MortageCalculator;
