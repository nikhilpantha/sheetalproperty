import React from "react";
import AdviceToolsCard from "../card/AdviceToolsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomRightArrow, CustomLeftArrow } from "../carousel/CustomeButton";
import { responsive } from "../carousel/Responsive";
import { advanceTools } from "../Object/advanceTools";

const AdviceTools = () => {
  return (
    <div className="px-5 lg:px-10 pt-16">
      <div className="">
        <h1 className="pb-3 text-3xl font-light">Advice & Tools</h1>
        <p className="bg-red-700 h-1 w-16"></p>
      </div>
      <div className="py-10 md:py-16">
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          className="pb-16"
        >
          {advanceTools.map((item, index) => (
            <AdviceToolsCard item={item} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AdviceTools;
