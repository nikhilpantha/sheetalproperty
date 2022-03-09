import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import LoginModel from "../../Login/LoginModel";

const Sidebar = () => {
  const [r, setR] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
          title: "Buy",
          link: "/productSearch",
        },
        {
          title: " Sale ",
        },
        {
          title: "Rent",

          link: "/productSearch",
        },
        {
          title: "Invest",
          link: "/productSearch",
        },
        {
          title: "Projects",
          link: "/productSearch/",
        },
      ],
    },
    {
      link: "/",
      title: "Property Demand",
    },
    {
      link: "/requirementForm",
      title: "Requirement form",
    },
    {
      link: "/findAgent",
      title: "Find Agent",
    },
    {
      link: "/",
      title: "Other service",
      subTitle: [
        {
          title: "Rent Service",
          link: "#",
        },
        {
          title: "Home Lone",
          link: "/homeLone",
        },
        {
          title: "Pay Rent Online",
          link: "/payRentOnline",
        },
        {
          title: "legal Help",
          link: "/legalHelp",
        },

        // {
        //   title: "Buy/sell services",
        //   link: "#",
        // },

        // {
        //   title: "property lawyers",
        //   link: "/",
        // },
        // {
        //   title: "Home inspection",
        //   link: "/",
        // },
        // {
        //   title: "design and Decor",
        //   link: "/",
        // },
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-14 w-auto"
                      src="/shetallogo.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="mt-5 flex-grow flex flex-col">
                    <nav
                      className="flex-1 px-2 space-y-1 bg-white"
                      aria-label="Sidebar"
                    >
                      {navigation.map((item) =>
                        !item.subTitle ? (
                          <div key={item.title}>
                            <a
                              href={item.link}
                              className={classNames(
                                item.current
                                  ? "bg-gray-100 text-gray-900"
                                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                              )}
                            >
                              {item.title}
                            </a>
                          </div>
                        ) : (
                          <Disclosure
                            as="div"
                            key={item.title}
                            className="space-y-1"
                          >
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-100 text-gray-900"
                                      : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                    "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none "
                                  )}
                                >
                                  <span className="flex-1">{item.title}</span>
                                  <svg
                                    className={classNames(
                                      open
                                        ? "text-gray-400 rotate-90"
                                        : "text-gray-300",
                                      "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                    )}
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M6 6L14 10L6 14V6Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </Disclosure.Button>
                                <Disclosure.Panel className="space-y-1">
                                  {item.subTitle.map((subItem) => (
                                    <Disclosure.Button
                                      key={subItem.title}
                                      as="a"
                                      href={subItem.link}
                                      className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                    >
                                      {subItem.title}
                                    </Disclosure.Button>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        )
                      )}
                    </nav>
                  </div>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <div className="flex-shrink-0 group block">
                    <div className="flex items-center justify-center space-x-3 text-sm">
                      <button
                        onClick={() => {
                          setR(true);
                          setSidebarOpen(false);
                        }}
                        className="border-2 rounded-lg border-red-500 p-2 "
                      >
                        Login / Register
                      </button>
                      <div className="border-2 rounded-lg border-red-500 p-2 text-white bg-red-500">
                        Post Property
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        <div className="px-5 flex justify-between items-center py-2 shadow-xl border-b border-gray-100">
          <a href="/">
            <img src="/shetallogo.png" alt="" className="w-28 h-auto" />
          </a>
          <div className="z-10 lg:hidden sm:pl-3 sm:pt-3 bg-white">
            <button
              type="button"
              className="h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {r && <LoginModel r={r} setR={setR} />}
    </>
  );
};
export default Sidebar;
