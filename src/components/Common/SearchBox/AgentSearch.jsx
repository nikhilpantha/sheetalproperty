import React from "react";
import { FaSearch } from "react-icons/fa";

const AgentSearch = () => {
  return (
    <form className="md:shadow p-5 grid md:grid-cols-6 gap-5 lg:gap-10">
      <label className="col-span-2 flex flex-col">
        <span className="font-semibold">Location</span>
        <div className="border border-gray-300 rounded overflow-hidden flex justify-between items-center p-2">
          <input type={"text"} placeholder="Neighbourhood/City/Zip" />
          <FaSearch className="text-red-700 w-5 h-5" />
        </div>
      </label>
      <label className="col-span-2 flex flex-col">
        <span className="font-semibold">Name</span>
        <div className="border border-gray-300 rounded overflow-hidden flex justify-between items-center p-2">
          <input type={"text"} placeholder="Agent Name" />
          <FaSearch className="text-red-700 w-5 h-5" />
        </div>
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">SPECIALTIES</span>
        <select className="border border-gray-300 rounded p-2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Language</span>
        <select className="border border-gray-300 rounded p-2">
          <option>English</option>
          <option>Nepali</option>
          <option>Hindi</option>
        </select>
      </label>
    </form>
  );
};

export default AgentSearch;
