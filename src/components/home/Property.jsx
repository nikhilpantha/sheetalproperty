import React from "react";
import Carousel from "react-multi-carousel";
import PropertyCard from "../card/PropertyCard";
import { CustomLeftArrow, CustomRightArrow } from "../carousel/CustomeButton";
import { responsive } from "../carousel/Responsive";

const Property = () => {
  return (
    <div className="px-5 lg:px-10 pt-16">
      <div className="">
        <h1 className="pb-3 text-3xl font-light">Property Services</h1>
        <p className="bg-red-700 h-1 w-16"></p>
      </div>
      <div className="py-10 md:py-16">
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          className="pb-16 "
        >
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </Carousel>
      </div>
    </div>
  );
};

export default Property;
