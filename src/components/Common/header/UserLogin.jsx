import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const UserLogin = () => {
  return (
    <div className="z-50">
      <Menu as="div" className=" relative inline-block">
        <div>
          <Menu.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img
              src="noUser.png"
              alt="noUser.png"
              className="w-12 h-12 rounded-full"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-3 py-3">
              <Menu.Item>
                <div className="flex justify-start items-center">
                  <FaUser className="w-5 h-5 text-red-700" />
                  <a
                    href="/myProfile"
                    className="flex rounded-md items-center w-full px-2 py-2 text-sm"
                  >
                    My Profile
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="flex justify-start items-center">
                  <IoLogOut className="w-5 h-5 text-red-700" />
                  <button className="flex rounded-md items-center w-full px-2 py-2 text-sm">
                    Sign Out
                  </button>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserLogin;
