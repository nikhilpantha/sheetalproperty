import { MenuIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { MobSidebar } from "./MobSidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="py-4 border-t border-white shadow-xl px-5 lg:px-10 flex justify-between items-center bg-red-700 text-white">
        <div className="inline">
          <h1 className="font-light text-xl">Hy,Ram!</h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6">
            <a href="/myProfile?section=messages">
              <HiMail className="w-7 h-7" />
            </a>
            <a href="/" className="relative">
              <span className="absolute top-0 right-0 w-2.5 h-2.5 border-2 rounded-full bg-white border-red-700 "></span>
              <FaBell className="w-5 h-5" />
            </a>
            <div className="flex items-center space-x-2">
              <span className="underline">ramparajuli</span>
              <FiChevronDown className="w-5 h-5" />
            </div>
            <button>
              <FaUserCircle className="w-7 h-7" />
            </button>
          </div>
          <button
            className="block md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon className="w-7 h-7 mr-2" />
          </button>
        </div>
      </div>
      <MobSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default Header;
