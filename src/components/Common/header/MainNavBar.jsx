import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const MainNavBar = () => {
  const navigation = [
    {
      link: "/",
      title: "Find Property",
      subTitle: [
        {
          title: "Buy ",
          link: "/",
        },
        {
          title: " Rent",
          link: "/",
        },
        {
          title: "House and land",
          link: "/",
        },
        {
          title: "new house",
          link: "/",
        },
        {
          title: "trural",
          link: "/",
        },
      ],
    },
    {
      link: "/",
      title: "Property Service",
      subTitle: [
        {
          title: "Rent Service",
          link: "#",
        },
        {
          title: "Pay Rent",
          link: "/",
        },
        {
          title: "Rent Agreement",
          link: "/",
        },
        {
          title: "Generate Rent Receipt",
          link: "/",
        },
        {
          title: "tenant verification",
          link: "/",
        },

        {
          title: "Buy/sell services",
          link: "#",
        },
        {
          title: "property lawyers",
          link: "/",
        },
        {
          title: "Home inspection",
          link: "/",
        },
        {
          title: "design and Decor",
          link: "/",
        },
      ],
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
      subTitle: [
        {
          title: "My property ",
          link: "/",
        },
        {
          title: " sell",
          link: "/",
        },
      ],
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
              <Menu.Items className="absolute w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                <div className="">
                  <Menu.Item>
                    {({ active }) => (
                      <>
                        {item.subTitle.map((sub, index) => (
                          <>
                            {sub.link === "#" ? (
                              <span className="block px-4 py-2 text-sm capitalize font-medium border-y">
                                {sub.title}
                              </span>
                            ) : (
                              <a
                                href={sub.link}
                                key={index}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900 "
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm capitalize"
                                )}
                              >
                                {sub.title}
                              </a>
                            )}
                          </>
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
