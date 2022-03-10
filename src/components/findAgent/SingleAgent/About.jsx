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
      <div className="text-sm flex flex-col space-y-5">
        <h1 className="text-xl font-medium">About us</h1>
        <div className="space-y-3">
          <p>Realtor-Broker (22 years experience)</p>
          <p>
            Specialties: Buyer's agent, Listing agent, Relocation, Consulting,
            Property Management
          </p>
          <p className="text-gray-600">
            For most families, their home is their largest financial asset, and
            deciding to sell it is a big decision that involves a lot of
            preparation and work. When you're ready to sell it's important to
            have an experienced real estate professional handle the details
            involved in the successful sale of a home for top dollar.
          </p>
        </div>
      </div>
      <div className="lg:w-2/3 border-t xs:border border-gray-300 xs:rounded py-5 xs:p-5">
        <div className="font-medium text-xl py-5 text-center">
          Professional Information
        </div>
        <ul className="flex xs:grid xs:grid-cols-2 gap-5 sm:gap-10 text-gray-600">
          <div className="grid gap-2 text-sm sm:text-base">
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
              <li key={index} className="font-medium text-sm sm:text-base">
                {value}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
