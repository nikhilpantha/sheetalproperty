import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className=" text-white space-y-5">
      <div className="grid grid-cols-12 gap-5 items-center">
        <div className="col-span-12 md:col-span-1">
          <span className="visible md:hidden ">Contact US</span>{" "}
        </div>
        <div className="col-span-11 hidden md:block">
          <span className="hidden sm:block">Contact US</span>
        </div>
        <div className="">
          <FaPhone className="w-5 h-5 rotate-90" />
        </div>
        <div className="col-span-11 ">
          {" "}
          <a href="tel: 9898989898">+977 989898989</a>
        </div>
        <div className="">
          <HiMail className="w-6 h-6" />
        </div>
        <div className="col-span-10">
          <a href="mailto: info@shetalgmail.com">info@shetalgmail.com </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
