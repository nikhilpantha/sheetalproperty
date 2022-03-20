import React from "react";

const text = [
  {
    user: false,
    message: "Hello, How are you?",
  },
  {
    user: true,
    message: "Hello, How are you?",
  },
  {
    user: false,
    message: "May I know the cost of the property?",
  },
  {
    user: true,
    message:
      "The rate of the property is Rs. 35000. Would you like to purchase it? ",
  },
];

const Chats = () => {
  return (
    <div className="p-5 md:p-10 space-x-10 s flex py-20">
      <div>
        <img
          src="/noUser.png"
          alt="noUser"
          className="w-24 h-20 rounded-full"
        />
      </div>
      <div className="w-full border rounded p-5">
        <div className="flex justify-between items-center pb-10">
          <div className="flex flex-col">
            <h1 className="font-medium">Shyam Dahal</h1>
            <p className="text-gray-500 text-sm">Budhanilkantha View Tower</p>
          </div>
          <div>Active Now</div>
        </div>
        <div className="w-full py-5 space-y-3.5">
          {text.map((item, index) => (
            <>
              {item.user ? (
                <div
                  key={index}
                  className={`flex  space-x-1 justify-start items-center`}
                >
                  <img
                    src="/noUser.png"
                    alt="noUser"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="p-2 px-5 border">{item.message}</div>
                </div>
              ) : (
                <div
                  key={index}
                  className={`flex space-x-1 justify-end items-center`}
                >
                  <div className="p-2 px-5 border">{item.message}</div>
                  <img
                    src="/noUser.png"
                    alt="noUser"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;
