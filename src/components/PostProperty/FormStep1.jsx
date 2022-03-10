import { XIcon } from "@heroicons/react/outline";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const FormStep1 = ({ setFormStep }) => {
  return (
    <div className="grid md:grid-cols-4 gap-10 md:gap-0 sm:pb-10">
      <div className="flex flex-col items-center flex-shrink-0 lg:px-4 border-r-2 ">
        <div className={`relative m-4`}>
          <img className="w-full h-auto" src="noUser.png" alt="Workflow" />
          <button className="absolute bottom-0 left-0 right-0 w-full bg-opacity-70 bg-black text-white py-2 flex space-x-2 justify-center">
            <span>Upload</span>
            <MdOutlineDriveFolderUpload className="w-5 h-5" />
          </button>
        </div>
        <div className="">Insert your property image</div>
      </div>
      <div className="md:col-span-3 p-5 lg:p-10 space-y-8">
        <div className="font-semibold text-lg">Enter your property details</div>
        <form className="space-y-4 lg:space-y-8">
          <label className="flex flex-col space-y-2">
            <span>Property Title</span>
            <input
              type="text"
              placeholder="Enter your property title"
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span>Description</span>
            <textarea
              rows={5}
              placeholder="Enter your property description"
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            <label className="flex flex-col space-y-2">
              <span>Type</span>
              <input
                type="text"
                placeholder="Apartment"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>Status</span>
              <input
                type="text"
                placeholder="For Rent"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>Area</span>
              <input
                type="text"
                placeholder="Enter area of your property"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>Bathroom</span>
              <input
                type="text"
                placeholder="Enter number of bathrooms"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>Bathroom</span>
              <input
                type="text"
                placeholder="Enter number of bathrooms"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>Build Year</span>
              <input
                type="text"
                placeholder="Enter year built"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>Price</span>
              <input
                type="text"
                placeholder="Enter Sale/Rent Price"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>Size Prefix</span>
              <input
                type="text"
                placeholder="Anna, Dhur"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
          </div>
        </form>
        <div className="text-lg font-semibold">Additional features</div>
        <form className="space-y-4 lg:space-y-8">
          <div className="grid sm:grid-cols-3 gap-8 items-end">
            <label className="flex flex-col space-y-2">
              <span>Size Prefix</span>
              <input
                type="text"
                placeholder="Anna, Dhur"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>Size Prefix</span>
              <input
                type="text"
                placeholder="Anna, Dhur"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <div className="flex sm:block justify-end sm:w-fit sm:h-fit">
              <button className="p-2 border border-gray-400 rounded flex">
                <span className="inline-block sm:hidden text-gray-400 pr-2">
                  Clear
                </span>
                <XIcon className="text-gray-400 w-6 h-6" />
              </button>
            </div>
          </div>
          <button className="text-white bg-red-700 font-semibold flex space-x-3 p-2 px-5 rounded items-center">
            <FaPlus className="w-5 h-5 " />
            <span>Add New</span>
          </button>
        </form>
        <div className="flex justify-end">
          <button
            onClick={() => {
              setFormStep(1);
              window.scrollTo(0, 0);
            }}
            className="text-white bg-red-700 font-semibold flex space-x-3 p-2 px-5 rounded items-center w-full md:w-auto justify-center"
          >
            <span>Next</span>
            <AiOutlineArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormStep1;
