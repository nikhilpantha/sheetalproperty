import React, { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import { navigation } from "./navigation";
import "animate.css";
import { useNavigate } from "react-router-dom";

const MainNavBar = () => {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) setScreen(true);
      else setScreen(false);
    });
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  let navigate = useNavigate();

  return (
    <div
      className={`${
        screen
          ? "fixed top-0 z-50 w-full animate__animated animate__fadeInDown"
          : "relative"
      } left-0 right-0 bg-red-700 px-5 lg:px-10 h-16 py-2 flex space-x-2 items-center justify-between`}
    >
      {navigation.map((item, index) => (
        <Menu key={index} as="div" className="text-left">
          <div className="flex">
            <Menu.Button className="inline-flex h-10 items-center justify-start text-md w-full text-white py-2 hover:border-b hover:border-white ">
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
              <Menu.Items className="absolute w-40  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                <div className="">
                  <Menu.Item>
                    {({ active }) => (
                      <>
                        {item.subTitle.map((sub, index) => (
                          <div key={index}>
                            {sub.link === "#" ? (
                              <span className="block px-4 py-2 text-sm capitalize font-medium border-y">
                                {sub.title}
                              </span>
                            ) : (
                              <>
                                {" "}
                                {item.title === "Find Property" ? (
                                  // <Link to={`${index}?tab=${sub.title}`}>
                                  <button
                                    onClick={() => {
                                      navigate({
                                        pathname: "",
                                        search: `?tab=${sub.title}`,
                                      });
                                    }}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900 "
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm capitalize"
                                    )}
                                  >
                                    {sub.title}
                                  </button>
                                ) : (
                                  // </Link>
                                  <a
                                    href={sub.link}
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
                            )}
                          </div>
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
