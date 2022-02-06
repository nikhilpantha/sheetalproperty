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
        className="w-full h-96 flex items-center justify-center bg-no-repeat bg-cover bg-bottom"
        style={{
          backgroundImage: `url("images.jpeg")`,
        }}
      >
        <h1 className="text-4xl font-semibold capitalize text-white">
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
