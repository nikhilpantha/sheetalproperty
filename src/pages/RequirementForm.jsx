import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const RequirementForm = () => {
  const people = [
    { id: 1, name: "Rent" },
    { id: 2, name: "Buy" },
    { id: 3, name: "Invest" },
  ];
  const [selected, setSelected] = useState(people[3]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex justify-center px-5 py-10 sm:p-10 md:p-16 lg:p-24">
      <div className="w-full">
        <h1 className="text-3xl font-bold w-full text-center  pb-10">
          Requirement Form{" "}
        </h1>
        <from className="space-y-5">
          <label className="flex flex-col space-y-2">
            <span>Name *</span>
            <input
              type="text"
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your name"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span>Temporary Address *</span>
            <input
              type={"text"}
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your temporary address"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span>Permanent Address *</span>
            <input
              type={"text"}
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your permanent address"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span>Contact number *</span>
            <input
              type={"Number"}
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your contact number"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span>Email Address *</span>
            <input
              type={"email"}
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your email address"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span>Occupation *</span>
            <input
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your email address"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span>Preferred location</span>
            <input
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your preferred location"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span>Maximum budget</span>
            <input
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your maximum budget"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span>Tenant option</span>
            <select
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your maximum budget"
            >
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
              <option value="invest">Invest</option>
            </select>
          </label>
          <label className="flex flex-col space-y-2">
            <span>Tenant option</span>
            <select
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your maximum budget"
              size={1}
            >
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
              <option value="invest">Invest</option>
            </select>
          </label>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <Listbox.Label className="block">Tenant option</Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button
                    placeholder=""
                    className="bg-white relative w-full border border-gray-300 rounded shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-2 focus:ring-red-700"
                  >
                    <span className="block truncate">{selected.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active ? " bg-gray-200" : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {person.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-red-700",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          <label className="flex flex-col space-y-2">
            <span> Description (if any)</span>
            <textarea
              rows={7}
              className="text-xl text-gray-500 border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your name"
            />
          </label>
          <button className="bg-red-700 px-10 md:px-24  p-3 font-bold text-white rounded-lg">
            Submit
          </button>
        </from>
      </div>
    </div>
  );
};

export default RequirementForm;
