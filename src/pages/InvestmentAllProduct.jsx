import React from "react";
import FearuredCard from "../components/card/FearuredCard";

const InvestmentAllProduct = () => {
  return (
    <div className="p-5 md:p-10">
      <h1 className="text-center text-2xl font-medium py-10">
        Properties in Budhanilkantha View Tower
      </h1>
      <div className="grid grid-cols-4 gap-10 my-10">
        <FearuredCard />
        <FearuredCard />
        <FearuredCard />
        <FearuredCard />
        <FearuredCard />
        <FearuredCard />
        <FearuredCard />
        <FearuredCard />
        <FearuredCard />
        <FearuredCard />
        <FearuredCard />
      </div>
    </div>
  );
};

export default InvestmentAllProduct;
