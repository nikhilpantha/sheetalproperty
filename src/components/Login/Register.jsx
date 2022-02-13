import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="p-3 text-sm">
      <form className="w-full space-y-5">
        <div className="border-2 border-gray-400 rounded-lg overflow-hidden">
          <label className="flex space-x-3 border-b-2 border-gray-400 p-3 items-center">
            <FaUserAlt className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Username or Email"
            />
          </label>
          <label className="flex space-x-3 border-b-2 border-gray-400 py-3 pl-2 items-center">
            <MdEmail className="w-7 h-7 text-gray-400" />
            <input
              type="email"
              className="w-full focus:outline-none"
              placeholder="Email"
            />
          </label>
          <label className="flex space-x-3 border-b-2 border-gray-400 p-3 items-center">
            <FaLock className="w-5 h-5 text-gray-400" />
            <input
              type={passwordShown ? "text" : "password"}
              className="w-full focus:outline-none"
              placeholder="Password"
            />
          </label>
          <label className="flex space-x-3  p-3 items-center">
            <FaLock className="w-5 h-5 text-gray-400" />
            <input
              type={passwordShown ? "text" : "password"}
              className="w-full focus:outline-none"
              placeholder="Conform Password"
            />
            {passwordShown ? (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPasswordShown(true);
                  }}
                >
                  <AiOutlineEyeInvisible className="w-6 h-6 text-gray-500" />
                </button>
              </>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordShown(false);
                }}
              >
                <AiOutlineEye className="w-6 h-6 text-gray-500" />
              </button>
            )}
          </label>
        </div>
        <label className="flex items-center text-gray-500 space-x-3">
          <input type="checkbox" className="w-5 h-5" />
          <span>
            I agree with your{" "}
            <span className="text-red-700">Terms & Conditions</span>
          </span>
        </label>
        <button className="text-white bg-red-700 rounded-lg w-full font-bold p-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
