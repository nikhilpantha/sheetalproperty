import React from "react";
import AdviceToolsCard from "../card/AdviceToolsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomRightArrow, CustomLeftArrow } from "../carousel/CustomeButton";
import { responsive } from "../carousel/Responsive";

const AdviceTools = () => {
  return (
    <>
      <div className="pt-16 px-10">
        <h1 className="pb-3 text-3xl font-light">Advice & Tools</h1>
        <p className="bg-red-700 h-0.5 w-16"></p>
      </div>
      <div className="px-10 py-5">
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          className="pb-16"
        >
          <AdviceToolsCard />
          <AdviceToolsCard />
          <AdviceToolsCard />
          <AdviceToolsCard />
          <AdviceToolsCard />
          <AdviceToolsCard />
          <AdviceToolsCard />
          <AdviceToolsCard />
        </Carousel>
      </div>
      ;
    </>
  );
};

export default AdviceTools;
