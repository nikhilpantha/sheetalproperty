import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AdviceToolsCard = () => {
  return (
    <div className="w-56 sm:w-80 bg-white rounded-md shadow-lg border border-gray-100">
      <div className="rounded-md overflow-hidden">
        <img
          src="undraw_At_work_re_qotl1.png"
          alt="undraw_At_work_re_qotl 1"
          className="w-36 bg-center h-32"
        />
        <div className="px-3 py-5 space-y-3">
          <h1 className="font-semibold">Legal Title Search</h1>
          <div className="text-gray-600 text-sm">
            Get end to end legal Assistance on your Property Documents.
          </div>
          <a href="/" className="text-red-700 flex space-x-2">
            <span>Read More</span>
            <BsArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdviceToolsCard;
