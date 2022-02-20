import React from "react";

const Details = () => {
  const object = {
    title: "Budhanilkantha View Tower",
    description:
      "Budhanilkantha View Tower is one of the significant realty markets in the West of the NCR region, witnessing rapid plotted developments. The corridor offers both residential and commercial plots of various sizes and ranges. The corridor starts from Gurugram and stretches up to Behror. Access to the Indira Gandhi International Airport is the primary driver of the corridor demand. The prominent areas witnessing plotted development along the corridor are Manesar, Gurugram, Dharuher, Rewari, Bhiwadi, Neemrana, Behror, Alwar, and Kotputli. Gracious Group. ",
    rate: [
      {
        flat: 1,
        area: "441 - 927 sq.ft",
        price: "Rs. 18 lakhs - 54 lakhst",
      },
      {
        flat: 2,
        area: "441 - 927 sq.ft",
        price: "Rs. 18 lakhs - 54 lakhs",
      },
      {
        flat: 3,
        area: "441 - 927 sq.ft",
        price: "Rs. 18 lakhs - 54 lakhst",
      },
      {
        flat: 4,
        area: "441 - 927 sq.ft",
        price: "Rs. 18 lakhs - 54 lakhs",
      },
      {
        flat: 5,
        area: "441 - 927 sq.ft",
        price: "Rs. 18 lakhs - 54 lakhs",
      },
    ],
  };
  return (
    <div>
      <div className="text-center space-y-5 p-5 border rounded border-gray-100 shadow">
        <h1 className="text-xl font-semibold">{object.title}</h1>
        <p>{object.description}</p>
      </div>
      <div className="py-16 space-y-10">
        <h1 className="text-xl">Property Rate</h1>
        <div className="grid lg:grid-cols-3 gap-32 lg:gap-10">
          <div className="w-full lg:col-span-2 space-y-5">
            {object.rate.map((item, index) => (
              <div key={index} className="grid grid-cols-6 gap-5 items-center">
                <div>{item.flat} BHK Flat</div>
                <div>{item.area}</div>
                <div className="col-span-2">{item.price}</div>
                <a
                  href="/investment/viewallproduct"
                  className="text-sm text-gray-500 border-b text-center border-gray-500 hover:text-red-700 hover:border-red-700"
                >
                  See all properties
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="space-y-5 w-full md:w-1/2 lg:w-auto ">
              <h1>Looking for property in Budhanilkantha View Tower?</h1>
              <p>Get Advice and Best Deals</p>
              <input
                type="text"
                placeholder="Name"
                className="text-black border-b  p-2 w-full outline-none"
              />
              <div className="flex justify-between space-x-5">
                <select className="text-gray-500 border-b-2  border-gray-300 outline-none">
                  <option className="px-5 py-2">Nep +977</option>
                </select>
                <input
                  type="text"
                  placeholder="Mobile"
                  className="text-black border-b-2 border-gray-300 p-2 w-full outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="text-black border-b-2 border-gray-300 p-2 w-full outline-none"
              />
              <div className="text-center">
                <button className="px-5 py-2 text-white bg-red-700 rounded">
                  Request Call Back
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
