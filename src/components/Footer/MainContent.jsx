import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const MainContent = () => {
  return (
    <div className="space-y-10 w-1/2">
      <img src="shetallogo.png" alt="footerlogo" className="w-28 h-16" />
      <p className="text-sm text-white">
        Shetal Real State is a company that helps you find your dream home.
      </p>
      <ul className="flex items-center space-x-3">
        <li>
          <BsFacebook className="w-7 h-7 text-white" />
        </li>
        <li>
          <AiFillTwitterCircle className="w-8 h-8 text-white" />
        </li>
        <li className="rounded-full w-7 h-7 overflow-hidden flex items-center justify-center">
          <FaInstagramSquare className="w-8 h-8 text-white" />
        </li>
      </ul>
    </div>
  );
};

export default MainContent;
