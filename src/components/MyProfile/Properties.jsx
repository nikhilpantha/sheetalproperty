import React from "react";
import PropertyCard from "./Card/PropertyCard";

const Properties = () => {
  return (
    <div className="p-5 lg:p-10 space-y-5 md:space-y-10">
      <div className="text-xl">Your Favourite Properties</div>
      <div className="grid xl:grid-cols-2 gap-5">
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default Properties;
