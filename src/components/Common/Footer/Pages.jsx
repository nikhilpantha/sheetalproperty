import React from "react";

const Pages = () => {
  return (
    <>
      <div className="text-white">
        <ul className="space-y-3">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/findAgent">Fond Agent</a>
          </li>
          <li>
            <a href="/homeLone">Services</a>
          </li>
          <li>
            <a href="/propertyDemand">Property Demand</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pages;
