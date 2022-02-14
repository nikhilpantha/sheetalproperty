import React from "react";

const AskOnline = () => {
  return (
    <div className="px-5 py-10 md:px-10 border-t-2 border-gray-300">
      <div className="p-10 text-center text-4xl font-light">Apply Online</div>
      <form className="md:px-28 pb-16 w-full space-y-7">
        <label className="flex flex-col space-y-1">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>Contact Number</span>
          <input
            type="text"
            placeholder="Enter your Contact Number"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>Email Address</span>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>Your Queries</span>
          <textarea
            rows="5"
            type="text"
            placeholder="Enter your Your Queries"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="w-full text-white bg-red-700 text-xl py-3 rounded"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default AskOnline;
