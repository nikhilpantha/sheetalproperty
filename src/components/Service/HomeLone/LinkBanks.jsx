import React from "react";
import { Link } from "react-router-dom";

const LinkBanks = () => {
  const banks = [
    {
      image: "nabil.png",
      name: "Nabil Bank",
      percentage: "6.4%",
      year: "5",
    },
    {
      image: "laxmi.png",
      name: "Laxmi Bank",
      percentage: "6.7%",
      year: "10",
    },
    {
      image: "nic.png",
      name: "NIC Asia",
      percentage: "5.4%",
      year: "12",
    },
    {
      image: "nepal.png",
      name: "NBBL",
      percentage: "7.4%",
      year: "23",
    },
    {
      image: "global.png",
      name: "Global IME Bank",
      percentage: "5.9%",
      year: "45",
    },
    {
      image: "mega.png",
      name: "Mega Bank",
      percentage: "9.5%",
      year: "34",
    },
    {
      image: "nibl.png",
      name: "NIBL",
      percentage: "3.2%",
      year: "56",
    },
  ];
  return (
    <div className="px-5 lg:px-10 py-16">
      <div>
        <h1 className="pb-3 text-3xl font-light uppercase">
          Top Home Loan Bank Partners
        </h1>
        <p className="bg-red-700 h-1 w-16"></p>
      </div>
      <div className="grid sm:grid-cols-2 md:flex flex-col gap-5  md:space-y-7 py-10">
        {banks.map((bank, index) => (
          <div
            key={index}
            className="p-5 grid md:grid-cols-6 gap-5 text-xl justify-center items-center text-gray-700 shadow border border-gray-200 capitalize rounded-lg overflow-x-auto"
          >
            <img
              src={`banks/${bank.image}`}
              alt={`banks/${bank.image}`}
              className="w-auto h-16"
            />
            <span className="w-full text-center font-bold text-black">
              {bank.name}
            </span>
            <span className="w-full font-light text-center">
              from{" "}
              <span className="w-full text-black  font-bold">
                {bank.percentage}
              </span>{" "}
              p.a.
            </span>
            <span className="w-full md:col-span-2 text-center">
              Max Tenure{" "}
              <span className="font-bold text-black">{bank.year} years</span>
            </span>
            <Link to="/payRentOnline">
              <button className="p-3 rounded text-white font-bold bg-red-700">
                Apply now
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="p-5 px-10 text-white bg-red-700 font-bold text-xl rounded-lg">
          +99 more
        </button>
      </div>
    </div>
  );
};

export default LinkBanks;
