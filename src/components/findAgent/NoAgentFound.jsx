import React from "react";

const NoAgentFound = () => {
  return (
    <div className="p-5 md:p-10 space-y-10 text-sm">
      <div className="grid  sm:grid-cols-3 items-center gap-10">
        <img src="/NoAgent.png" alt="NoAgent.png" className="w-full h-auto" />
        <div className="sm:col-span-2">
          <h1 className="font-semibold text-xl">Find agents in your area.</h1>
          <p className="text-gray-500">
            To get started, enter your location or search for specific agent by
            name.
          </p>
        </div>
      </div>
      <div className="space-y-5 text-gray-500 ">
        <p>
          Whether you are looking to rent, buy or sell your home, Zillow's
          directory of local real estate agents and brokers connects you with
          professionals who can help meet your needs. Because the real estate
          market is unique, it's important to choose a real estate agent or
          broker with local expertise to guide you through the process of
          renting, buying or selling your next home. Our directory helps you
          find real estate professionals who specialize in buying, selling,
          foreclosures, or relocation - among many other options. Alternatively,
          you could work with a local agent or real estate broker who provides
          an entire suite of buying and selling services.
        </p>
        <p>
          No matter what type of real estate needs you have, finding the local
          real estate professional you want to work with is the first step. The
          real estate directory lets you view and compare real estate agents,
          read reviews, see an agent's current listings and past sales, and
          contact agents directly from their profile pages on Zillow.
        </p>
        <p>
          Zillow is the leading real estate and rental marketplace dedicated to
          empowering consumers with data, inspiration and knowledge around the
          place they call home, and connecting them with the best local
          professionals who can help.
        </p>
      </div>
    </div>
  );
};

export default NoAgentFound;
