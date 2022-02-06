import React from "react";
import Contact from "./Contact";
import LowerFooter from "./LowerFooter";
import MainContent from "./MainContent";
import OurServices from "./OurServices";
import Pages from "./Pages";
import PropertiesInNepal from "./PropertiesInNepal";

const Footer = () => {
  return (
    <>
      <div className="p-10 bg-stone-700 grid grid-cols-12 gap-5">
        <div className="col-span-4">
          <MainContent />
        </div>
        <div className="col-span-2">
          <OurServices />
        </div>
        <div className="col-span-2">
          <PropertiesInNepal />
        </div>
        <div className="col-span-2">
          <Pages />
        </div>
        <div className="col-span-2">
          <Contact />
        </div>
      </div>
      <LowerFooter />
    </>
  );
};

export default Footer;
