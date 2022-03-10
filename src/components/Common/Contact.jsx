import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="p-5 py-10 lg:p-10 grid md:grid-cols-2 items-center gap-5 lg:gap-10 xl:gap-20">
      <img src="/contact.png" alt="" className="w-full h-auto rounded" />

      <div className="space-y-5">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="font-light">
          Have any queries? We’d love to hear from you
        </p>
        <div className="grid items-center sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-16 py-3">
          <p className="flex flex-col space-y-2 sm:border-r-2 md:border-none lg:border-r-2 border-gray-200 w-full">
            <span className="flex items-center space-x-3">
              <FaPhone className="w-5 h-5 rotate-90 text-red-700" />
              <span className="font-light">Call us</span>
            </span>
            <span>+977 9801000434</span>
          </p>
          <p className="flex flex-col w-full">
            <span className="flex items-center space-x-2">
              <HiMail className="w-7 h-7 text-red-700" />
              <span className="font-light">Mail us</span>
            </span>
            <span>info@shetalproperty.com</span>
          </p>
        </div>
        <div className="text-center font-light -ml-16 uppercase text-xl">
          or
        </div>
        <div className="space-y-2 xl:w-2/3">
          <p className="text-xl">Request a Call Back</p>
          <input
            type={"text"}
            className="p-2 text-gray-500 border border-gray-300 rounded w-full"
            placeholder="Mobile Number"
          />
          <label className="flex font-light space-x-3 items-center text-sm">
            <input type="checkbox" className="w-5 h-5" />
            <span>
              I agree to Home Loan T&C, Shetal Property T&C, Privacy Policy, &
              Cookie Policy
            </span>
          </label>
        </div>
        <div className="text-center">
          <button className="text-white font-medium bg-red-700 rounded px-5 py-3">
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
