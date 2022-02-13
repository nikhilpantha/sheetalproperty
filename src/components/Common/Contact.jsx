import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="p-5 py-10 lg:p-10 grid lg:grid-cols-2 items-center gap-5">
      <img src="contact.png" alt="" className="w-full h-auto rounded" />

      <div className="space-y-7">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="font-light text-xl">
          Have any queries? We’d love to hear from you
        </p>
        <div className="grid sm:grid-cols-2 gap-5 py-3">
          <p className="flex flex-col space-y-5 sm:border-r-2 border-gray-200 w-full">
            <span className="flex space-x-3">
              <FaPhone className="w-6 h-6 text-red-700" />
              <span className="font-light">Call us</span>
            </span>
            <span>+977 9801000434</span>
          </p>
          <p className="flex flex-col space-y-5 w-full">
            <span className="flex space-x-3">
              <HiMail className="w-6 h-6 text-red-700" />
              <span className="font-light">Mail us</span>
            </span>
            <span>info@shetalproperty.com</span>
          </p>
        </div>
        <div className="text-center font-light uppercase text-2xl">or</div>
        <p className="text-xl text-gray-500">Request a Call Back</p>
        <input
          type={"text"}
          className="p-5 text-gray-500 border border-gray-300 text-xl rounded w-full"
          placeholder="Mobile Number"
        />
        <label className="flex font-light space-x-5 items-center">
          <input type="checkbox" className="w-7 h-7" />
          <span className="text-xl">
            I agree to Home Loan T&C, Shetal Property T&C, Privacy Policy, &
            Cookie Policy
          </span>
        </label>
        <div className="text-center">
          <button className="text-white font-bold bg-red-700 rounded px-10 py-5 text-xl">
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
