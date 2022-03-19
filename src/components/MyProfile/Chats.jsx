import React, { useState } from "react";

const chats = () => {
  const [chatting, setChatting] = useState;
  return (
    <div className="p-5 md:p-10 space-y-16 grid grid-cols-3">
      <div>
        <img src="noUser.png" alt="noUser" className="w-24 h-24"></img>
      </div>
      <div className="col-span-2 border rounded">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h1 className="font-medium">Shyam Dahal</h1>
            <p className="text-gray-500 text-sm">Budhanilkantha View Tower</p>
          </div>
          <div>Active Now</div>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex space-x-1 justify-start">
            <img src="noUser.png" alt="noUser" />
            <div className="p-2 px-5 border">Hello, How are you?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chats;
