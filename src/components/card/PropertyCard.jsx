import React from "react";

const FearuredCard = ({ item }) => {
  return (
    <a
      href={item.href}
      className="block w-full xs:w-64 sm:w-80 bg-white rounded-md shadow-lg border-2 border-gray-200"
    >
      <div className="rounded-md overflow-hidden">
        <img
          src={`property/${item.image}`}
          alt={`property/${item.image}`}
          className="w-full bg-center h-44 sm:h-48"
        />
        <div className="p-3 space-y-2 pb-7 ">
          <h1 className="text-gray-700 text-xl">{item.title}</h1>
          <div className="text-gray-500 font-light">{item.description}</div>
        </div>
      </div>
    </a>
  );
};

export default FearuredCard;
