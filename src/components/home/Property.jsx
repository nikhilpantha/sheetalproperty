import React from "react";
import Carousel from "react-multi-carousel";
import PropertyCard from "../card/PropertyCard";
import { CustomLeftArrow, CustomRightArrow } from "../carousel/CustomeButton";
import { responsive } from "../carousel/Responsive";

const Property = () => {
  return (
    <>
      <div className="pt-16 px-10">
        <h1 className="pb-3 text-3xl font-light">Property Services</h1>
        <p className="bg-red-700 h-0.5 w-16"></p>
      </div>
      <div className="px-10 py-5">
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          className="pb-16"
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
    </>
  );
};

export default Property;
