import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { MultiSelect } from "../components/Common/SelectBox";

const RequirementForm = () => {
  const people = [
    { id: 1, name: "Rent" },
    { id: 2, name: "Buy" },
    { id: 3, name: "Invest" },
  ];
  console.log(people[2]);

  const [selected, setSelected] = useState(people[2]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex justify-center px-5 py-10 sm:p-5 lg:p-10 xl:p-24">
      <div className="w-full">
        <h1 className="text-3xl font-bold w-full text-center  pb-10">
          Requirement Form{" "}
        </h1>
        <form className="space-y-5">
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
              size={1}
            >
              <option value="">Enter tenant option</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
              <option value="invest">Invest</option>
            </select>
          </label>

          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1 rounded focus:outline-none focus:ring-2 focus:ring-red-700">
              <Listbox.Button className="relative w-full p-3 text-left bg-white  cursor-default focus:outline-none sm:text-sm text-xl text-gray-500 border border-gray-300 rounded  focus:ring-2 focus:ring-red-700">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-amber-900 bg-amber-100"
                            : "text-gray-900"
                        }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-gary-600" : "text-gray-600"
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
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
        </form>
      </div>
    </div>
  );
};

export default RequirementForm;
