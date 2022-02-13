import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import TopProjectCard from "../card/TopPojectCard";

export const TopProjects = () => {
  return (
    <>
      <div className="md:pt-16 px-5 md:px-10">
        <h1 className="pb-3 text-3xl font-light">Top Product</h1>
        <p className="bg-red-700 h-0.5 w-16"></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 lg:px-10 md:py-5 gap-5 xl:gap-10">
        <TopProjectCard />
        <TopProjectCard />
        <TopProjectCard />
        <TopProjectCard />
      </div>
      <button
        type="button"
        onClick=""
        className="md:mt-5 right-10 w-full px-5  focus:outline-none flex space-x-2 text-red-700 text-xl capitalize items-center justify-end"
      >
        <span>view all product</span>
        <AiOutlineArrowRight className="h-7 w-7 " />
      </button>
    </>
  );
};
