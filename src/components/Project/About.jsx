import React from "react";
import { product } from "../Object/product";

const About = () => {
  return (
    <div className="lg:w-3/4 pb-10">
      <h1 className="text-2xl my-8">About Budhanilkantha View Tower</h1>
      <ul className="text-gray-700 py-5 grid grid-cols-2 md:grid-cols-3 gap-5">
        <li className="flex flex-col">
          <span className="text-sm text-gray-700">Status</span>
          <span className="text-black">{product.status}</span>
        </li>
        <li className="flex flex-col">
          <span className="text-sm text-gray-700">Launch Date</span>
          <span className="text-black">{product.LaunchDate}</span>
        </li>
        <li className="flex flex-col">
          <span className="text-sm text-gray-700">Total Units</span>
          <span className="text-black">{product.TotalUnits}</span>
        </li>
        <li className="flex flex-col">
          <span className="text-sm text-gray-700">Total Tower</span>
          <span className="text-black">{product.TotalTower}</span>
        </li>
        <li className="flex flex-col">
          <span className="text-sm text-gray-700">Property Type</span>
          <span className="text-black">{product.PropertyType}</span>
        </li>
        <li className="flex flex-col">
          <span className="text-sm text-gray-700">Project Area</span>
          <span className="text-black">{product.superArea}</span>
        </li>
        <li className="flex flex-col">
          <span className="text-sm text-gray-700">Occupancy Certificate</span>
          <span className="text-black">{product.lift}</span>
        </li>
        <li className="flex flex-col">
          <span className="text-sm text-gray-700">Pincode</span>
          <span>{product.Pincode}</span>
        </li>
        <li className="flex flex-col">
          <span className="text-sm text-gray-700">Address</span>
          <span className="text-black">{product.address}</span>
        </li>
      </ul>
    </div>
  );
};

export default About;
