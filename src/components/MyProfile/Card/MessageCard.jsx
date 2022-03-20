import React from "react";
import { Link } from "react-router-dom";

const MessageCard = () => {
  return (
    <Link to={"/myProfile/messages"}>
      <div className="flex space-x-5">
        <img src="noUser.png" alt="noUser" className="rounded-full w-24 h-24" />
        <div className="flex flex-col space-y-2 border border-gray-200 rounded p-3 w-full">
          <div className="flex flex-col">
            <span>Shyam Dahal</span>
            <span className="text-sm text-gray-500">
              Budhanilkantha View Tower
            </span>
          </div>
          <div className="flex justify-between items-center lg:space-x-10 text-sm">
            <span className="">The rate of the property is Rs.35000....</span>
            <span className="text-gray-500">3:45 pm</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MessageCard;
