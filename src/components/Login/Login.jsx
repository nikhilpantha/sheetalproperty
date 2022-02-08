import React from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className="p-3">
      <form className="w-full space-y-5">
        <div className="border-2 border-gray-400 rounded-lg overflow-hidden">
          <label className="flex space-x-3 border-b-2 border-gray-400 p-3 items-center">
            <FaUserAlt className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              className="w-full text-xl focus:outline-none"
              placeholder="Username or Email"
            />
          </label>

          <label className="flex space-x-3  p-3 items-center">
            <FaLock className="w-5 h-5 text-gray-400" />
            <input
              type="Password"
              className="w-full text-xl focus:outline-none"
              placeholder="Password"
            />
          </label>
        </div>
        <div className="flex justify-between">
          <label className="flex items-center text-gray-500 space-x-3">
            <input type="checkbox" className="w-5 h-5" />
            <span>Remember me</span>
          </label>
          <a href="/" className="text-red-700">
            Forgot password?
          </a>
        </div>

        <button className="text-white bg-red-700 rounded-lg w-full text-xl font-bold p-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
