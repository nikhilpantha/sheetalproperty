import React from "react";
import AdviceToolsCard from "../card/AdviceToolsCard";
import "react-multi-carousel/lib/styles.css";

import { advanceTools } from "../Object/advanceTools";

const AdviceTools = () => {
  return (
    <div className="px-5 lg:px-10 pt-16">
      <div className="">
        <h1 className="pb-3 text-3xl font-light">Advice & Tools</h1>
        <p className="bg-red-700 h-1 w-16"></p>
      </div>
      <div className="py-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:py-16">
        {advanceTools.map((item, index) => (
          <AdviceToolsCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AdviceTools;
