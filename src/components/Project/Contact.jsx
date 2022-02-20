import React from "react";

const Contact = () => {
  return (
    <div className="border border-gray-300 rounded flex flex-col space-y-5 p-5">
      <h1 className="text-xl">
        Looking for property in Budhanilkantha View Tower ?
      </h1>
      <input
        className="border border-gray-300 rounded p-2"
        type="text"
        placeholder="Name"
      />
      <input
        className="border border-gray-300 rounded p-2"
        type="email"
        placeholder="Email"
      />
      <input
        className="border border-gray-300 rounded p-2"
        type="text"
        placeholder="Contact Number"
      />
      <div className="flex space-x-3 items-center">
        <input type="checkbox" className="w-5 rounded h-5" />
        <span className="text-sm">
          I agree to Terms & Condition of Sheetal Property
        </span>
      </div>
      <div className="text-center">
        <button className="text-white bg-red-700 px-5 py-2 rounded">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Contact;
