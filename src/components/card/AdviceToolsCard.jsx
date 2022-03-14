import React from "react";

const AdviceToolsCard = ({ item }) => {
  return (
    <div className="w-full bg-white rounded-md shadow-lg border-2 border-gray-200">
      <div className="rounded-md overflow-hidden">
        <img
          src={`/advanceTools/${item.image}`}
          alt={item.image}
          className="w-36 bg-center h-32"
        />
        <div className="px-3 py-5 space-y-4 pb-7">
          <h1 className="font-light text-2xl">{item.title}</h1>
          <div className="text-gray-600 text">{item.description}</div>
          <a
            href={item.href}
            className="text-red-700 flex items-center space-x-2 text-lg"
          >
            <span>Read More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdviceToolsCard;
