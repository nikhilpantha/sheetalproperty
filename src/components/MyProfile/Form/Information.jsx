import React from "react";

const Information = () => {
  return (
    <div className="space-y-5 md:space-y-10">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-2xl font-semibold text-gray-900">Information</h1>
      </div>
      <form className="grid md:grid-cols-2 gap-10">
        <label className="flex flex-col space-y-3">
          <span>Username</span>
          <input
            type="text"
            placeholder="ramparajuli"
            disabled
            className="border-gray-300 bg-gray-200 rounded"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Email</span>
          <input
            type="email"
            value={"ramparajuli@gmai.com"}
            className="border-gray-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>First Name</span>
          <input
            type="text"
            className="border-gray-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
        <label className="flex flex-col space-y-3">
          <span>Last Name</span>
          <input
            type="text"
            className="border-gray-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700"
          />
        </label>
      </form>
    </div>
  );
};

export default Information;
