import React from "react";
import Details from "../components/Investment/explore/Details";
import Map from "../components/Investment/explore/Map";
import ProjectAction from "../components/Investment/explore/ProjectAction";

const InvestmentExplore = () => {
  return (
    <div className="p-5 lg:p-10">
      <Details />
      <Map />
      <ProjectAction />
    </div>
  );
};

export default InvestmentExplore;
