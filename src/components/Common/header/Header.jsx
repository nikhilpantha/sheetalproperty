import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import MainNavBar from "./MainNavBar";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <Fragment>
      <div className="">
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
    </Fragment>
  );
};

export default Header;
