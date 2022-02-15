import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SingleInvestment = ({ item }) => {
  console.log(item);
  return (
    <div className="grid xs:grid-cols-3 gap-8 md:gap-10 border border-gray-100 rounded p-4 shadow bg-gray-50">
      <img
        src={`/investment/${item.image}`}
        alt={item.image}
        className="w-full h-auto rounded col-span-1"
      />
      <div className="col-span-2 space-y-5 text-sm sm:text-base flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold">{item.title}</h1>
          <ul className="list-disc">
            {item.description.map((des, index) => (
              <li key={index} className="font-light">
                {des}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  items-end justify-end">
          <Link to="/investment/export">
            <button className="bg-red-700 text-white p-3 px-5 rounded flex space-x-5">
              <span>Explore</span>
              <FiArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleInvestment;
