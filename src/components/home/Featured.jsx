import React from "react";
import Carousel from "react-multi-carousel";
import FearuredCard from "../card/FearuredCard";
import { CustomLeftArrow, CustomRightArrow } from "../carousel/CustomeButton";
import { responsive } from "../carousel/Responsive";

const Featured = () => {
  return (
    <>
      <div className="pt-16 px-5 md:px-10">
        <h1 className="pb-3 text-3xl font-light">Featured Properties</h1>
        <p className="bg-red-700 h-0.5 w-16"></p>
      </div>
      <div className="px-2 md:px-10 md:py-5">
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
    </>
  );
};

export default Featured;
