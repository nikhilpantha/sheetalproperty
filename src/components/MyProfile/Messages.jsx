import React from "react";
import MessageCard from "./Card/MessageCard";

const Messages = () => {
  return (
    <div className="w-full p-5 lg:p-10 space-y-5">
      <div>
        <MessageCard />
      </div>
      <div>
        <MessageCard />
      </div>
    </div>
  );
};

export default Messages;
