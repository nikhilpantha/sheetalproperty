import React from "react";

const ContactForm = () => {
  return (
    <div className="p-5 border border-gray-500 rounded space-y-5">
      <h1 className="text-2xl font-bold">Want to contact John Gomez?</h1>
      <div>
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
          <div className="flex space-x-4">
            <input type={"checkbox"} className="w-5 h-5" />
            <span>I agree to Terms & Condition of Sheetal Property</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-700 text-white px-5 py-2 rounded">
              Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
