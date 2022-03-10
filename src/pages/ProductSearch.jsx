import React from "react";
import FilterCard from "../components/card/FilterCard";
import FilterModal from "../components/ProductFilter/FilterModal";

const ProductSearch = () => {
  return (
    <div className="p-5 lg:p-10 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Property on Rent</h1>
        <FilterModal />
      </div>
      <div>
        <FilterCard />
      </div>
      <div>
        <FilterCard />
      </div>
      <div className="flex justify-center">
        <button className="text-white bg-red-700 font-semibold p-2 px-5 rounded">
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;
