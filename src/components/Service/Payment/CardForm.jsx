import React from "react";

const CardForm = ({ setSelect }) => {
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
          <span>Card Number</span>
          <input
            type="text"
            placeholder="Enter your Card Number"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>Name On Card</span>
          <input
            type="text"
            placeholder="Enter your Card name"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>Expiration (MM/YY)</span>
          <input
            type="text"
            placeholder="Enter your expiration date of card"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>CVV</span>
          <input
            type="text"
            placeholder="Enter your CVV"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>Amount</span>
          <input
            type="text"
            placeholder="Enter the amount to pay"
            className="w-full text-gray-500 border border-gray-300 rounded p-3 focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="w-full text-white bg-red-700 text-xl py-3 rounded"
        >
          Pay Now
        </button>
      </form>
      <button
        onClick={() => setSelect(1)}
        className="text-white bg-red-700 text-xl px-5 py-3 rounded"
      >
        Previous
      </button>
    </div>
  );
};

export default CardForm;
