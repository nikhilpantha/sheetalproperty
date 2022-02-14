import React from "react";

const RentOnline = ({ setSelect }) => {
  return (
    <div>
      <form className="md:px-28 pb-16 w-full space-y-5">
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
          <span>Location</span>
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>Locality</span>
          <input
            type="text"
            placeholder="Enter your locality"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>House number</span>
          <input
            type="text"
            placeholder="Enter your house number"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>Payment option</span>
          <select className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none">
            <option value="">Choose your payment option</option>
            <option value="card">Credit/Debit Card</option>
            <option value="esewa">Esewa</option>
            <option value="khalti">Khalti</option>
          </select>
        </label>
        <button
          onClick={() => {
            // status = "complete";
            setSelect(2);
          }}
          type="submit"
          className="w-full text-white bg-red-700 text-xl py-3 rounded"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default RentOnline;
