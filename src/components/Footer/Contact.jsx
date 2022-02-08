import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className=" text-white space-y-5">
      <div className="capitalize">contact us</div>
      <a href="tel-9898989898" className="flex items-center space-x-2">
        <FaPhone className="w-4 h-4 rotate-90" />
        <span>+977 9898989898</span>
      </a>
      <a href="/" className="flex items-center space-x-2">
        <HiMail className="w-5 h-5" />
        <span>info@shetalgmail.com</span>
      </a>
    </div>
  );
};

export default Contact;
