import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import TopPojectCard from "../card/TopPojectCard";

export const TopProjects = () => {
  return (
    <>
      <div className="pt-16 px-10">
        <h1 className="pb-3 text-3xl font-light">Top Product</h1>
        <p className="bg-red-700 h-0.5 w-16"></p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 px-10 py-5">
        <TopPojectCard />
        <TopPojectCard />
        <TopPojectCard />
        <TopPojectCard />
      </div>
      <button
        type="button"
        onClick=""
        className="absolute mt-5 right-10  focus:outline-none flex space-x-2 text-red-700 text-xl capitalize items-center"
      >
        <span>view all product</span>
        <AiOutlineArrowRight className="h-7 w-7 " />
      </button>
    </>
  );
};
