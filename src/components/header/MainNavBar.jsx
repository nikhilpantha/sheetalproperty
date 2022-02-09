import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const MainNavBar = () => {
  const navigation = [
    {
      title: "Find Property",
      subTitle: ["Buy", "Rent", "House and land", "new house", "rural"],
    },
    {
      title: "Property Service",
      subTitle: ["Buy", "Rent", "House and land", "new house", "rural"],
    },
    {
      title: "Property Demand",
      subTitle: [],
    },
    {
      title: "Requirement form",
      subTitle: [],
    },
    {
      title: "Find Agent",
      subTitle: [],
    },
    {
      title: "For Owners",
      subTitle: ["Buy", "Rent", "House and land", "new house", "rural"],
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-red-700 px-10 h-16 py-2 flex items-center justify-between">
      {navigation.map((item) => (
        <Menu as="div" className="text-left">
          <div className="flex">
            <Menu.Button className="inline-flex items-center justify-center w-full text-white px-4 py-2 font-medium hover:border-b-2 hover:border-white">
              {item.title}
              {item.subTitle.length > 0 && (
                <RiArrowDownSLine
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              )}
            </Menu.Button>
          </div>
          {item.subTitle.length > 0 && (
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <>
                        {item.subTitle.map((sub, index) => (
                          <a
                            href="/"
                            key={index}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 "
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {sub}
                          </a>
                        ))}
                      </>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          )}
        </Menu>
      ))}
    </div>
  );
};

export default MainNavBar;
