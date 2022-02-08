import React, { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import LoginModel from "../Login/LoginModel";

const TopBar = () => {
  const [r, setR] = useState(false);
  useEffect(() => {
    return () => {};
  }, [setR]);

  return (
    <>
      <div className="px-10 py-3 shadow flex justify-between items-center">
        <img src="shetallogo.png" alt="shetallogo.png" className="w-32 h-16" />
        <div className="flex space-x-7 items-center">
          <button
            onClick={() => {
              setR(true);
            }}
            className="text-red-700 capitalize font-semibold flex items-center space-x-2"
          >
            <span>Login / Register</span>
            <RiArrowDownSLine className="w-5 h-5" />
          </button>
          <a
            href="/"
            className="px-4 py-2 bg-red-700 text-white capitalize rounded-md"
          >
            post property{" "}
          </a>
        </div>
      </div>
      {r && <LoginModel r={r} setR={setR} />}
    </>
  );
};

export default TopBar;
