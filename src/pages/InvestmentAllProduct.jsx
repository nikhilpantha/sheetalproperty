import React from "react";
import FearuredCard from "../components/card/FearuredCard";

const InvestmentAllProduct = () => {
  return (
    <div className="px-5 md:px-10 lg:px-2 xl:p-10">
      <h1 className="text-center text-2xl font-medium py-10">
        Properties in Budhanilkantha View Tower
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10 md:gap-5 xl:gap-10 my-10">
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
