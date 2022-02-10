import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";

const MainContent = () => {
  return (
    <div className="space-y-5 xl:w-2/3">
      <img src="shetallogo.png" alt="footerlogo" className="w-28 h-16" />
      <p className="text-white">
        Shetal Real State is a company that helps you find your dream home.
      </p>
      <ul className="flex items-center mt-10 space-x-3">
        <li>
          <BsFacebook className="w-10 h-10 text-white" />
        </li>
        <li>
          <AiFillTwitterCircle className="w-12 h-12 text-white" />
        </li>
        <li className="rounded-full w-10 h-10 p-2 overflow-hidden flex items-center justify-center bg-white">
          <IoLogoInstagram className="w-full h-full text-neutral-400" />
        </li>
      </ul>
    </div>
  );
};

export default MainContent;
