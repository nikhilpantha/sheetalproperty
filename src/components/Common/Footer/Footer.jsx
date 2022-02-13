import React from "react";
import Contact from "./Contact";
import LowerFooter from "./LowerFooter";
import MainContent from "./MainContent";
import OurServices from "./OurServices";
import Pages from "./Pages";
import PropertiesInNepal from "./PropertiesInNepal";

const Footer = () => {
  return (
    <div className="flex flex-col xl:items-center bg-neutral-400">
      <div className="px-5 py-10 lg:p-10  grid grid-cols-1 lg:grid-cols-8 gap-16 lg:gap-5 max-w-[1440px]">
        <div className="lg:col-span-2">
          <MainContent />
        </div>
        <div className=" lg:col-span-1">
          <OurServices />
        </div>
        <div className="lg:col-span-2 lg:flex justify-center">
          <PropertiesInNepal />
        </div>
        <div className="lg:col-span-1">
          <Pages />
        </div>
        <div className="lg:col-span-2">
          <Contact />
        </div>
      </div>
      <div className="w-full bg-white">
        <LowerFooter />
      </div>
    </div>
  );
};

export default Footer;
