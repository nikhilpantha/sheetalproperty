import React from "react";
import FilterCard from "../components/card/FilterCard";
import ContactOwner from "../components/filterDetails/ContactOwner";
import { product } from "../components/Object/product";
import ScheduleTour from "../components/scheduleTour/ScheduleTour";
import Description from "../components/SingleProduct/Description";

const InvestDetails = () => {
  return (
    <div className="">
      <div className="p-5 lg:p-10 text-2xl font-bold">
        4 BHK House, Golfutar, KTM
      </div>

      <div className="p-5 lg:px-10 lg:pb-10 rounded-xl overflow-hidden">
        <div className="rounded-b px-3 py-0.5 font-semibold absolute top-0 bg-red-700 text-sm text-white uppercase">
          For {product.PropertyStatus}
        </div>
        <img
          src="/unsplash.png"
          alt="unsplash"
          className="w-full bg-center h-96 bg-cover"
        />
      </div>
      <div className="grid xl:grid-cols-4 gap-5 pr-5">
        <div className="xl:col-span-3">
          <Description />
        </div>
        <div className="lg:pt-16">
          <ContactOwner />
        </div>
      </div>
      <ScheduleTour />
      <div className="p-5 lg:p-10 space-y-10">
        <div className=" text-2xl font-bold">Similar Properties</div>
        <div>
          <FilterCard />
        </div>
        <div>
          <FilterCard />
        </div>
        <div>
          <FilterCard />
        </div>
      </div>
    </div>
  );
};

export default InvestDetails;
