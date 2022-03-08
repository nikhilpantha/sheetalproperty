import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";
import { FaUserCircle } from "react-icons/fa";

const ContactModel = ({ open, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
            <div className="relative inline-block align-bottom bg-white rounded-lg pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
              <div className="hidden sm:block absolute top-0 right-0 mr-3 mt-4">
                <button
                  type="button"
                  className="text-white hover:text-red-500 focus:outline-none "
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
              <div className="">
                <div className="sm:flex sm:items-start ">
                  <div className="bg-gray-300 flex space-x-3 items-center p-3 w-full">
                    <div>
                      <FaUserCircle className="text-gray-700 w-10 h-10" />
                    </div>
                    <div className="flex flex-col">
                      <div>Ram Timalsina</div>
                      <div>Owner +97798XXXXXX45</div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <form className="space-y-5">
                    <input
                      type="text"
                      className="border-b w-full p-2 text-xl"
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      className="border-b w-full p-2 text-xl"
                      placeholder="Email"
                    />
                    <div className="flex space-x-5">
                      <select className="border-b p-2">
                        <option>Npl +977</option>
                      </select>

                      <input
                        type="text"
                        className="border-b w-full p-2 text-xl"
                        placeholder="Mobile number"
                      />
                    </div>
                    <div className="flex space-x-4 items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <div>
                        <div>
                          I wish to be contacted by Sheetal Property expert.{" "}
                        </div>
                        <div>I agree Sheetal Property Terms and Policy.</div>
                      </div>
                    </div>
                    <div>
                      <button className="w-full bg-red-700 py-2 text-lg font-bold text-white rounded-lg ">
                        Contact Owner
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ContactModel;
