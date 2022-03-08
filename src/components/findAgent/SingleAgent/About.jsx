import React from "react";
// const arrayvals = [
//   { BrokerAddress: "Golfutar, Kathmandu" },
//   { CellPhone: "+977 9836473628" },
//   { BrokerPhone: "+977 9836473628" },
//   { Website: "abcd.com" },
//   { ScreenName: "John Gomez" },
//   { MemberSince: "20/12/2022" },
//   { RealEstateLicenses: "12345abc" },
//   { OtherLicenses: "abcd, efgh, ijkl" },
// ];

const arrayvals = [
  "Golfutar, Kathmandu",
  "+977 9836473628",
  "+977 9836473628",
  "abcd.com",
  "John Gomez",
  "20/12/2022",
  "12345abc",
  "abcd, efgh, ijkl",
];

const About = () => {
  return (
    <div className="space-y-10">
      <div className="text-gray-500 text-sm flex flex-col space-y-5">
        <h1 className="text-xl font-light">About us</h1>
        <div className="space-y-3">
          <p>Realtor-Broker (22 years experience)</p>
          <p>
            Specialties: Buyer's agent, Listing agent, Relocation, Consulting,
            Property Management
          </p>
          <p>
            For most families, their home is their largest financial asset, and
            deciding to sell it is a big decision that involves a lot of
            preparation and work. When you're ready to sell it's important to
            have an experienced real estate professional handle the details
            involved in the successful sale of a home for top dollar.
          </p>
        </div>
      </div>
      <div className="lg:w-3/2 border border-gray-400 rounded p-5">
        <div className="text-center text-xl py-10">
          Professional Information
        </div>
        <ul className="grid grid-cols-2 gap-10 text-gray-600">
          <div className="grid gap-2">
            <li className="">Broker Address:</li>
            <li className="">Cell Phone:</li>
            <li className="">Broker Address:</li>
            <li className="">Broker Phone:</li>
            <li className="">Website:</li>
            <li className="">Screen Name:</li>
            <li className="">MemberSince:</li>
            <li className="">RealEstate Licenses:</li>
            <li className="">Other Licenses:</li>
          </div>
          <div className="grid gap-2">
            {arrayvals.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
