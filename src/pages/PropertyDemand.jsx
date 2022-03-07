import React from "react";
import InputBox from "../components/Common/SearchBox/InputBox";
import PropertyDemandTable from "../components/PropertyDemandTable";

const PropertyDemand = () => {
  return (
    <div className="p-5 md:p-10 space-y-10">
      <div className="text-2xl font-bold">PropertyDemand</div>
      <div className="flex justify-center px-5 md:px-10">
        <div className="w-full xl:w-9/12 bg-white rounded p-3 xs:p-7  md:p-10 lg:space-y-5">
          <InputBox />
        </div>
      </div>
      <PropertyDemandTable />
    </div>
  );
};

export default PropertyDemand;
