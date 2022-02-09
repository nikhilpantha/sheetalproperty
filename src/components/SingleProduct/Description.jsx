import React from "react";

const Description = () => {
  const product = {
    title: "4 BHK House",
    address: "Golfutar, Kathmandu",
    discription:
      "Close to Ringroad, Central location, Surrounded by friendly neighbourhood",
    facilitie: "Water Storage, Private Terrace, Parking, Garden",
    bedroom: "4",
    bathroom: "4",
    balcony: "2",
    price: "Rs. 10 Cr.",
    superArea: "2025 sq.ft",
    carpetArea: "2000 sq.ft",
    status: "Ready to move",
    floor: "2 floors",
    parking: "Available",
    landmarks: "Golfutar Basketball Court",
    overlooking: "Garden/Park, Main Road",
    facing: "Marble",
    flooring: "Marble",
    waterAvailability: "24/7 Available",
    electricity: "No/Rare Power cut",
    lift: "No",
    construction: "5-10 years",
    furnishing: "Furnished",
    ownership: "Freeholder",
    report: "Sold Outs",
    unitsAvailable: "1",
  };
  return (
    <div className="">
      <div className="border-y-2 border-gray-200 px-10 py-3 font-bold text-2xl">
        Description
      </div>
      <div className="py-5 px-10">
        <p>{product.discription}</p>
        <div className="grid grid-cols-4 py-10">
          <ul className="text-gray-700 space-y-5">
            <li>price</li>
            <li>Facilities</li>
            <li>Address</li>
            <li>Landmarks</li>
            <li>Facing</li>
            <li>Overlooking</li>
            <li>Flooring</li>
            <li>Water Availability</li>
            <li>Status of Electricity</li>
            <li>Lift</li>
            <li>Age of Construction</li>
            <li>Units Available</li>
            <li>Furnishing</li>
            <li>Type of Ownership</li>
          </ul>
          <ul className="text-gray-700 space-y-5 col-span-3">
            <li>{product.price}</li>
            <li>{product.facilitie}</li>
            <li>{product.address}</li>
            <li>{product.landmarks}</li>
            <li>{product.facing}</li>
            <li>{product.overlooking}</li>
            <li>{product.flooring}</li>
            <li>{product.waterAvailability}</li>
            <li>{product.electricity}</li>
            <li>{product.lift}</li>
            <li>{product.construction}</li>
            <li>{product.unitsAvailable}</li>
            <li>{product.furnishing}</li>
            <li>{product.ownership}</li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <button className="text-white font-bold bg-red-700 text-lg px-5 py-3 rounded-lg">
            Contact Owner
          </button>
          <div className="flex space-x-5 items-center capitalize">
            <span>reports:</span>
            <ul className="flex space-x-3 items-center">
              <li className="border-b border-gray-500 text-gray-500 py-2">
                Sold Out
              </li>
              <li className="border-b border-gray-500 text-gray-500 py-2">
                Wrong info
              </li>

              <li className="border-b border-gray-500 text-gray-500 py-2">
                Broker
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
