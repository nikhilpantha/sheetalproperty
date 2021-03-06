/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Register from "./Register";
import Login from "./Login";

const LoginModel = ({ r, setR }) => {
  let [categories] = useState({
    Login: [<Login />],
    Register: [<Register />],
  });
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Transition.Root show={r} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0" onClose={setR}>
        <div className="flex items-end justify-center min-h-screen sm:pt-4 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full h-screen sm:h-auto">
              <Tab.Group>
                <Tab.List className="flex p-1 space-x-1 bg-red-700 text-white ">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          "w-full py-4 mx-3 leading-5 font-medium text-white",
                          "focus:outline-none",
                          selected ? "border-b-2 border-white" : ""
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                  <div className="pr-4 pt-4">
                    <button
                      type="button"
                      className=" rounded-md text-white focus:outline-none"
                      onClick={() => setR(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-7 w-7" aria-hidden="true" />
                    </button>
                  </div>
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {Object.values(categories).map((posts, idx) => (
                    <Tab.Panel
                      key={idx}
                      className={classNames(
                        "bg-white rounded-xl p-3",
                        "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                      )}
                    >
                      {posts}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoginModel;
