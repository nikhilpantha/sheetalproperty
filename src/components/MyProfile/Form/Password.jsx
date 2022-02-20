import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

const Password = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [conformPasswordShown, setConformPasswordShown] = useState(false);
  const [oldPassword, setOldPasswordShown] = useState(false);
  return (
    <div className="space-y-5 md:space-y-10">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-2xl font-semibold text-gray-900">
          Change Password
        </h1>
      </div>
      <form className="grid gap-10 md:w-1/2">
        <label className="flex flex-col space-y-3">
          <span>Old Password</span>
          <div className="border border-gray-300 rounded overflow-hidden flex space-x-3 pr-3 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700">
            <input
              type={oldPassword ? "text" : "password"}
              className="w-full border-none"
            />
            {oldPassword ? (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOldPasswordShown(false);
                  }}
                >
                  <AiOutlineEyeInvisible className="w-6 h-6 text-gray-500" />
                </button>
              </>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOldPasswordShown(true);
                }}
              >
                <AiOutlineEye className="w-6 h-6 text-gray-500" />
              </button>
            )}
          </div>
        </label>
        <label className="flex flex-col space-y-3">
          <span>New Password</span>
          <div className="border border-gray-300 rounded overflow-hidden flex space-x-3 pr-3 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700">
            <input
              type={passwordShown ? "text" : "password"}
              className="w-full border-none"
            />
            {passwordShown ? (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPasswordShown(false);
                  }}
                >
                  <AiOutlineEyeInvisible className="w-6 h-6 text-gray-500" />
                </button>
              </>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordShown(true);
                }}
              >
                <AiOutlineEye className="w-6 h-6 text-gray-500" />
              </button>
            )}
          </div>
        </label>
        <label className="flex flex-col space-y-3">
          <span>Confirm New Password</span>
          <div className="border border-gray-300 rounded overflow-hidden flex space-x-3 pr-3 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-700 focus-visible:ring-offset-2 focus-visible:border-red-700">
            <input
              type={conformPasswordShown ? "text" : "password"}
              className="w-full border-none"
            />
            {conformPasswordShown ? (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setConformPasswordShown(false);
                  }}
                >
                  <AiOutlineEyeInvisible className="w-6 h-6 text-gray-500" />
                </button>
              </>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setConformPasswordShown(true);
                }}
              >
                <AiOutlineEye className="w-6 h-6 text-gray-500" />
              </button>
            )}
          </div>
        </label>
      </form>
      <div className="flex justify-end">
        <button className="text-white font-medium bg-red-700 rounded px-5 py-3">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Password;
