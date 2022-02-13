import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AdviceToolsCard = () => {
  return (
    <div className="w-full xs:w-64 sm:w-80 bg-white rounded-md shadow-lg border-2 border-gray-200">
      <div className="rounded-md overflow-hidden">
        <img
          src="undraw_At_work_re_qotl1.png"
          alt="undraw_At_work_re_qotl 1"
          className="w-36 bg-center h-32"
        />
        <div className="px-3 py-5 space-y-4 pb-7">
          <h1 className="font-light text-2xl">Legal Title Search</h1>
          <div className="text-gray-600 text">
            Get end to end legal Assistance on your Property Documents.
          </div>
          <a
            href="/"
            className="text-red-700 flex items-center space-x-2 text-xl"
          >
            <span>Read More</span>
            <BsArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdviceToolsCard;
