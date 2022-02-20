import React from "react";

const WhyThis = () => {
  return (
    <div className="border border-gray-300 rounded p-10 my-10 space-y-5">
      <h1 className="text-xl">Why buy this Project?</h1>
      <ul className="list-disc space-y-5 font-light">
        <li>Approved by DDA</li>
        <li>80% occupied</li>
        <li>Air conditioned and Luxurious</li>
        <li>Upcoming 1500 acre Nepalese township</li>
      </ul>
      <button className="border border-red-700 text-red-700 px-5 py-2 rounded">
        Download Brochure
      </button>
    </div>
  );
};

export default WhyThis;
