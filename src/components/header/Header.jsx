import React from "react";
import MainNavBar from "./MainNavBar";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div className="sticky top-0 right-0 left-0 z-10">
      <div className="hidden lg:block">
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
      <div className="block lg:hidden bg-white">
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
