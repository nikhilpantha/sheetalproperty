import React from "react";

const ContactOwner = () => {
  return (
    <div className="p-5 rounded space-y-5">
      <form className="space-y-5 flex flex-col">
        <input
          type={"text"}
          placeholder="Name"
          className="border border-gray-300 rounded p-2"
        />
        <input
          type={"email"}
          placeholder="Email"
          className="border border-gray-300 rounded p-2"
        />
        <input
          type={"text"}
          placeholder="Contact form "
          className="border border-gray-300 rounded p-2"
        />
        <textarea
          rows={3}
          placeholder="Message"
          className="border border-gray-300 rounded p-2"
        />

        <button className="w-full bg-red-700 text-white px-5 py-2 rounded">
          Contact
        </button>
        <button className="w-full text-red-700 border-2 border-red-700 px-5 py-2 rounded">
          Send Direct Message
        </button>
      </form>
    </div>
  );
};

export default ContactOwner;
