import React from "react";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import ContactModel from "./ContactModel";

const product = {
  title: "4 BHK House",
  address: "Golfutar, Kathmandu",
  discription:
    "Close to Ringroad, Central location, Surrounded by friendly neighbourhood",
  Facilitie: "Water Storage, Private Terrace, Parking, Garden",
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
  facing: "Marble",
  waterAvailability: "24/7 Available",
  electricity: "No/Rare Power cut",
  lift: "No",
  construction: "5-10 years",
  Furnishing: "Finished",
  ownership: "Freeholder",
  report: "Sold Outs",
};

const Details = ({ setOpen }) => {
  return (
    <>
      <div className="md:grid grid-cols-12 items-center gap-10 pt-24 py-10 px-5 lg:pl-10">
        <img
          src="unsplash.png"
          alt="unsplash"
          className="h-full w-full rounded-lg col-span-6 xl:col-span-7"
        />
        <div className="col-span-6 xl:col-span-5 py-5">
          <h1 className="font-bold text-2xl">{product.title}</h1>
          <p className="text-gray-600 mt-2">for sale in {product.address}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-5 my-7">
            <div className="flex flex-col space-y-1">
              <span className="text-gray-600 text-sm">Bedroom</span>
              <span className="font-semibold text-lg">{product.bedroom}</span>
            </div>
            <div className="flex flex-col  space-y-1">
              <span className="text-gray-600 text-sm">Bathroom</span>
              <span className="font-semibold text-lg">{product.bathroom}</span>
            </div>
            <div className="flex flex-col  space-y-1">
              <span className="text-gray-600 text-sm">Balcony</span>
              <span className="font-semibold text-lg">{product.balcony}</span>
            </div>
            <div className="flex flex-col  space-y-1">
              <span className="text-gray-600 text-sm">Price</span>
              <span className="font-semibold text-lg">{product.price}</span>
            </div>
            <div className="flex flex-col  space-y-1">
              <span className="text-gray-600 text-sm">Super Area</span>
              <span className="font-semibold text-lg">{product.superArea}</span>
            </div>
            <div className="flex flex-col  space-y-1">
              <span className="text-gray-600 text-sm">Carpet Area</span>
              <span className="font-semibold text-lg">
                {product.carpetArea}
              </span>
            </div>
            <div className="flex flex-col  space-y-1">
              <span className="text-gray-600 text-sm">Status</span>
              <span className="font-semibold text-lg">{product.status}</span>
            </div>
            <div className="flex flex-col  space-y-1">
              <span className="text-gray-600">Floor</span>
              <span className="font-semibold text-lg">{product.floor}</span>
            </div>
            <div className="flex flex-col  space-y-1">
              <span className="text-gray-600">Parking</span>
              <span className="font-semibold text-lg">{product.parking}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:flex  sm:flex-row space-y-5 sm:space-x-5  sm:space-y-0 items-center">
            <button
              onClick={() => setOpen(true)}
              className="col-span-2 px-5 py-3 text-white font-bold bg-red-700 rounded-lg"
            >
              Contact Owner
            </button>

            <Link to="/payRentOnline">
              <button className="px-5 py-3 text-red-700 border border-red-700 rounded-lg">
                Get contact number
              </button>
            </Link>
            <BsHeart className="w-10 h-10 text-red-700" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
