import React from "react";

const HowToWork = () => {
  const work = [
    {
      image: "undraw_Forms_re_pkrt1.png",
      description:
        "Fill an online form to view the best offers from our partner banks.",
    },
    {
      image: "undraw_Personal_text_re_vqj31.png",
      description:
        "Our executive helps you choose the best offer for your requirement.",
    },
    {
      image: "undraw_Personal_file_re_5joy1.png",
      description:
        "We pick up documents at your doorstep and submit to the bank.",
    },
    {
      image: "undraw_Order_confirmed_re_g0if1.png",
      description: "Bank reviews your application and confirms approval.",
    },
  ];
  return (
    <div className="px-5 lg:px-10 pt-16">
      <div className="">
        <h1 className="pb-3 text-3xl font-light uppercase">How to work</h1>
        <p className="bg-red-700 h-1 w-16"></p>
      </div>
      <div className="py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {work.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-lg p-5 shadow-sm space-y-5"
          >
            <img
              src={`Services/${item.image}`}
              alt={`Services/${item.image}`}
              className=""
            />
            <p className="text-gray-700 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToWork;
