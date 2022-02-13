import React from "react";
import EmiCalculator from "../components/Common/EmiCalculator";
import Contact from "../components/Common/Contact";
import Details from "../components/Service/HomeLone/Details";
import HowToWork from "../components/Service/HomeLone/HowToWork";
import LinkBanks from "../components/Service/HomeLone/LinkBanks";

const HomeLone = () => {
  return (
    <div>
      <Details />
      <HowToWork />
      <LinkBanks />
      <EmiCalculator />
      <Contact />
    </div>
  );
};

export default HomeLone;
