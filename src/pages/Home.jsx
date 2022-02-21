import React from "react";
import AdviceTools from "../components/home/AdviceTools";
import Featured from "../components/home/Featured";
import Property from "../components/home/Property";
import Search from "../components/home/Search";
import { TopProjects } from "../components/home/TopProjects";

const Home = () => {
  return (
    <div className="space-y-10 pb-20">
      <div
        className="w-full h-72 flex items-center justify-center bg-no-repeat bg-cover bg-center px-5"
        style={{
          backgroundImage: `url("349872.jpeg")`,
        }}
      >
        <h1 className="md:text-5xl text-3xl font-semibold capitalize text-white">
          Search Nepal’s home of property
        </h1>
      </div>
      <Search />
      <Featured />
      <Property />
      <TopProjects />
      <AdviceTools />
    </div>
  );
};

export default Home;
