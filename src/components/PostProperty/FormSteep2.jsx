import React from "react";

const PropertyFeature = [
  {
    checkBox: false,
    name: "AC",
  },
  {
    checkBox: false,
    name: "Advanced Lift",
  },
  {
    checkBox: false,
    name: "Air Conditioning",
  },
  {
    checkBox: false,
    name: "Aluminum Partition",
  },
  {
    checkBox: false,
    name: "Attached Almari",
  },
  {
    checkBox: false,
    name: "Backup Generator",
  },
  {
    checkBox: false,
    name: "Balcony",
  },
  {
    checkBox: false,
    name: "Backup Solar",
  },
  {
    checkBox: false,
    name: "COMMUNITY HALL",
  },
  {
    checkBox: false,
    name: "Drainage",
  },
  {
    checkBox: false,
    name: "Drinking water supply",
  },
  {
    checkBox: false,
    name: "Dryer",
  },
  {
    checkBox: false,
    name: "Electricity Backup",
  },
  {
    checkBox: false,
    name: "Elevator",
  },
  {
    checkBox: false,
    name: "Fence",
  },
  {
    checkBox: false,
    name: "Gym",
  },
  {
    checkBox: false,
    name: "Meeting Hall",
  },
  {
    checkBox: false,
    name: "Microwave",
  },
  {
    checkBox: false,
    name: "Modular Kitchen",
  },
  {
    checkBox: false,
    name: "Master Bedroom",
  },
  {
    checkBox: false,
    name: "Outdoor Shower",
  },
  {
    checkBox: false,
    name: "Parking",
  },
  {
    checkBox: false,
    name: "Parquet",
  },
  {
    checkBox: false,
    name: "Partition",
  },
  {
    checkBox: false,
    name: "Peaceful Environment",
  },
];

const FormSteep2 = () => {
  return (
    <form className="p-5 lg:p-10 lg:pt-0 space-y-5 lg:space-y-10">
      <div className="text-lg font-bold">Property Feature</div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {PropertyFeature.map((item, index) => (
          <div className="flex space-x-3 items-center" key={index}>
            <input type="checkbox" className="w-5 h-5" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-5 md:col-span-4 xl:col-span-3 space-y-5">
          <label className="flex flex-col space-y-2">
            <span>Property Location</span>
            <input
              type="text"
              placeholder="Enter your Property Location"
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <div className="grid  sm:grid-cols-2 gap-8">
            <label className="flex flex-col space-y-2">
              <span>Address</span>
              <input
                type="text"
                placeholder="Enter your Address"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>Country</span>
              <input
                type="text"
                placeholder="Enter your Country"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>City</span>
              <input
                type="text"
                placeholder="Enter your City"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span>ZIP-Code</span>
              <input
                type="text"
                placeholder="Enter your ZIP Code"
                className="w-full p-2 border border-gray-400 rounded"
              />
            </label>
          </div>
          <label className="flex flex-col space-y-2">
            <span>Private Note</span>
            <textarea
              rows={6}
              placeholder="Write private note for this property, it will not be displayed to publiic."
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <div className="space-y-5">
            <h1>Attachment</h1>
            <button className="bg-red-700 px-5 py-2 text-white rounded">
              Select Attachment
            </button>
            <p className="text-sm text-gray-500">
              You can attach PDF files, Map images OR other documents to provide
              further details related to property.
            </p>
          </div>
          <div className="flex justify-end pt-10">
            <button className="bg-red-700 px-5 py-2 text-white rounded w-full sm:w-auto">
              Summit Property
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormSteep2;
