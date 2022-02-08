import React from "react";
import MainNavBar from "./MainNavBar";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="bg-white">
          <div className="mx-auto max-w-[1440px] ">
            <TopBar />
          </div>
        </div>
        <div className="bg-red-700">
          <div className="mx-auto max-w-[1440px] bg-red-700">
            <MainNavBar />
          </div>
        </div>
      </div>
      <div className="block md:hidden bg-white">
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
