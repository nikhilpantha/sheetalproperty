import React from "react";
import Carousel from "react-multi-carousel";
import FearuredCard from "../card/FearuredCard";
import { CustomLeftArrow, CustomRightArrow } from "../carousel/CustomeButton";
import { responsive } from "../carousel/Responsive";

const Featured = () => {
  return (
    <div className="px-5 md:px-10 pt-16">
      <div className="">
        <h1 className="pb-3 text-3xl">Featured Properties</h1>
        <p className="bg-red-700 h-1 w-16"></p>
      </div>
      <div className="py-10 md:py-16">
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          className="pb-16 pt-5 "
        >
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
        </Carousel>
      </div>
    </div>
  );
};

export default Featured;
