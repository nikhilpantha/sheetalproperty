import React from "react";

const NoData = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center space-y-3">
        <img
          src="no-data-found.png"
          alt="no-data-found.png"
          className="w-56 h-auto"
        />
        <div className="text-gray-300 text-2xl font-light">
          You don’t have any favouriite properties.
        </div>
      </div>
    </div>
  );
};

export default NoData;
