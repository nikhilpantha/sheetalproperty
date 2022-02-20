import React from "react";
import Featured from "../components/home/Featured";
import About from "../components/Project/About";
import Contact from "../components/Project/Contact";
import Details from "../components/Project/Details";
import WhyThis from "../components/Project/WhyThis";

const Project = () => {
  return (
    <>
      <div className="px-5 lg:px-10">
        <div className="py-10 border-b-2 border-gray-300">
          <img
            src="/investment/unsplash3.png"
            alt="/investment/unsplash2"
            className="w-full h-96 bg-cover bg-center rounded"
          />
        </div>
        <div className="grid lg:grid-cols-3 py-10 gap-10">
          <div className="lg:col-span-2">
            <Details />
            <WhyThis />
          </div>
          <div>
            <Contact />
          </div>
        </div>
        <About />
      </div>
      <Featured />
    </>
  );
};

export default Project;
