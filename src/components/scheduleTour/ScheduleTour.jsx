import React from "react";
import MortageCalculator from "./MortageCalculator";

const ScheduleTour = () => {
  return (
    <div className="px-5 py-16 lg:px-10 space-y-8">
      <div className="text-2xl font-bold">ScheduleTour</div>
      <div className="grid lg:grid-cols-3 gap-10 xl:gap-16">
        <div className="lg:col-span-2 border border-gray-300 rounded-lg p-5">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="flex flex-col">
                <span>Date</span>
                <input
                  type={"text"}
                  placeholder="Select Tour Date"
                  className="border rounded w-full p-2"
                />
              </label>
              <label className="flex flex-col">
                <span>Time</span>
                <input
                  type={"text"}
                  placeholder="Select preferrable time"
                  className="border rounded w-full p-2"
                />
              </label>
            </div>
            <div className="grid md:grid-cols-3 items-end gap-5">
              <label className="flex flex-col">
                <span>Your Information</span>
                <input
                  type={"text"}
                  placeholder="Name"
                  className="border rounded w-full p-2"
                />
              </label>
              <label className="flex flex-col">
                <input
                  type={"text"}
                  placeholder="Phone"
                  className="border rounded w-full p-2"
                />
              </label>
              <label className="flex flex-col">
                <input
                  type={"email"}
                  placeholder="Email"
                  className="border rounded w-full p-2"
                />
              </label>
            </div>
            <textarea
              rows={6}
              placeholder="Message"
              className="w-full border p-2 rounded"
            />
            <div className="">
              <button className="bg-red-700 text-white font-semibold px-5 py-2 rounded-lg">
                Contact Owner
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <div className="w-full lg:w-96">
            <MortageCalculator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTour;
