import React from "react";
import SingleInvestment from "../components/Investment/SingleInvestment";
import { investment } from "../components/Object/investment";

const Investment = () => {
  return (
    <div className="py-10">
      <div className="text-3xl text-center">Top Investment Hotstop</div>
      <div className="p-5 py-10 md:p-10 gap-10 grid xl:grid-cols-2">
        {investment.map((item, index) => (
          <SingleInvestment key={index} item={item} />
        ))}
      </div>
      <div className="text-center py-10">
        <button className="bg-red-700 text-white px-5 py-3 rounded font-bold">
          View More
        </button>
      </div>
    </div>
  );
};

export default Investment;
