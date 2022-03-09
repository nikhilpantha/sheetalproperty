import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineControl } from "react-icons/ai";

const filterModal = () => {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center space-x-3 items-center w-full px-4 py-2 text-xl font-medium bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <AiOutlineControl
              className="w-5 h-5 ml-2 -mr-1"
              aria-hidden="true"
            />
            <span>Filters</span>
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
          <Menu.Items className="absolute right-0 w-56 lg:w-96 mt-2 origin-top-right z-20 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <div className="flex justify-start items-start flex-col p-5 space-y-4 font-medium">
                <button>Best Match</button>
                <button>Price low to high </button>
                <button>Price high to low</button>
                <div>
                  <h1>Price</h1>
                  <form className="grid lg:grid-cols-2 gap-5">
                    <input
                      type={"text"}
                      placeholder="Max"
                      className="border rounded-lg p-2"
                    />
                    <input
                      type={"text"}
                      placeholder="Min"
                      className="border rounded-lg p-2"
                    />
                  </form>
                </div>
                <div className="flex w-full justify-center">
                  <button className="bg-red-700 text-white p-2 px-5 font-medium rounded">
                    Proceed
                  </button>
                </div>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default filterModal;
