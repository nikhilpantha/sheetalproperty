import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const MainNavBar = () => {
  const navigation = [
    {
      link: "/",
      title: "Find Property",
      subTitle: ["Buy", "Rent", "House and land", "new house", "rural"],
    },
    {
      link: "/",
      title: "Property Service",
      subTitle: ["Buy", "Rent", "House and land", "new house", "rural"],
    },
    {
      link: "/",
      title: "Property Demand",
      subTitle: [],
    },
    {
      link: "/requirementForm",
      title: "Requirement form",
      subTitle: [],
    },
    {
      link: "/findAgent",
      title: "Find Agent",
      subTitle: [],
    },
    {
      link: "/",
      title: "For Owners",
      subTitle: ["Buy", "Rent", "House and land", "new house", "rural"],
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-red-700 px-5 lg:px-10 h-16 py-2 flex space-x-2 items-center justify-between">
      {navigation.map((item, index) => (
        <Menu key={index} as="div" className="text-left">
          <div className="flex">
            <Menu.Button className="inline-flex items-center justify-start text-md w-full text-white py-2 hover:border-b-2 hover:border-white">
              {item.subTitle.length > 0 ? (
                <>
                  {item.title}
                  <RiArrowDownSLine className=" h-7 w-7" aria-hidden="true" />
                </>
              ) : (
                <a href={item.link}>{item.title}</a>
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
