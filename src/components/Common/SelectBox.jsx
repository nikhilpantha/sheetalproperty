import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ExclamationCircleIcon,
  SelectorIcon,
} from "@heroicons/react/solid";
import { Fragment } from "react/cjs/react.production.min";
import CheckboxGroup from "./CheckboxGroup/CheckboxGroup";

export const SelectBox = () => {
  const people = [
    { id: 1, name: "Rent" },
    { id: 2, name: "Buy" },
    { id: 3, name: "Invest" },
  ];
  console.log(people[2]);

  const [selected, setSelected] = useState(people[2]);

  return (
    <div>
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
                    `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
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
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
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
    </div>
  );
};

export const MultiSelect = (props) => {
  const {
    searchable,
    searchPlaceholder,
    onSearch,
    onChange,
    placeholder,
    label,
    options: initialOptions = [],
    value,
    validationError,
    loading,
    fetchError,
    useImageHost = true,
    multiple,
    staticSearch,
    customRenderer,
  } = props;
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(value);
  const [options, setOptions] = useState(initialOptions);

  const handleChange = (option) => {
    setSelected(option);
    if (onChange && typeof onChange === "function") {
      onChange(option);
    }
  };

  const handleSearch = (event) => {
    const text = event.target.value;
    setSearchText(text.trimLeft());

    const isOnSearchFunction = onSearch && typeof onSearch === "function";

    if (staticSearch) {
      if (isOnSearchFunction) {
        onSearch(text.trimLeft());
      } else {
        setOptions(
          initialOptions.filter((option) =>
            option.label.toLowerCase().includes(text.toLowerCase())
          )
        );
      }
    } else {
      onSearch(text.trimLeft());
    }
  };

  const handleKeys = (event) => {
    event.stopPropagation();
  };

  let selectContent = <></>;

  let haveValue = false;

  if (value !== null) {
    if (multiple) {
      haveValue = !!value.length;
    } else {
      haveValue = !!Object.keys(value).length;
    }
  }

  if (haveValue) {
    if (Array.isArray(selected)) {
      let text = "";

      if (selected.length < 3) {
        text = `${selected.map((item) => item.label).join(", ")}`;
      } else {
        text = `${selected
          .slice(0, 2)
          .map((item) => item.label)
          .join(", ")}${
          selected.length - 2 ? ` & ${selected.length - 2} more` : ""
        }`;
      }

      selectContent = <span className="block truncate">{text}</span>;
    } else {
      selectContent = (
        <span className="block truncate text-sm text-gray-800">
          {selected?.label}
        </span>
      );
    }
  } else {
    selectContent = (
      <span className="block truncate text-sm text-gray-300">
        {placeholder}
      </span>
    );
  }

  let mainContent = <></>;

  if (loading) {
    mainContent = <div>Loading...</div>;
  } else if (fetchError) {
    mainContent = <div>Error...</div>;
  } else if (multiple) {
    mainContent = (
      <div className="px-3">
        <CheckboxGroup
          options={options}
          onChange={handleChange}
          values={value || []}
        />
      </div>
    );
  } else {
    mainContent = (
      <>
        {options.map((option) => (
          <Listbox.Option
            key={option.key}
            className={({ active }) =>
              `${
                active ? "text-white bg-primary" : "text-gray-900"
              } cursor-default select-none relative py-2 px-4`
            }
            value={option}
          >
            {({ selected: selectedOption, active }) => {
              if (customRenderer) {
                return customRenderer(option, { selectedOption, active });
              }

              const { label: selectedLabel } = option;

              return (
                <>
                  <div className="flex items-center">
                    <span
                      className={`${
                        selectedOption ? "font-semibold" : "font-normal"
                      } block truncate ${option.imageUrl ? "ml-3" : ""}`}
                    >
                      {selectedLabel}
                    </span>
                  </div>

                  {selectedOption ? (
                    <span
                      className={`${
                        (active, "text-white", "text-primary")
                      } absolute inset-y-0 right-0 flex items-center pr-4`}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              );
            }}
          </Listbox.Option>
        ))}
      </>
    );
  }

  let additionalClasses = "";

  if (validationError) {
    additionalClasses =
      "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500";
  }

  return (
    <div>
      <Listbox value={selected} onChange={handleChange}>
        {({ open }) => (
          <>
            {label && (
              <Listbox.Label className="block text-sm font-medium text-gray-700">
                {label}
              </Listbox.Label>
            )}
            <div className="mt-1 relative">
              <Listbox.Button
                className={`relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm ${additionalClasses}`}
              >
                {selectContent}
                {validationError && (
                  <div className="absolute inset-y-0 right-5 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
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
                <Listbox.Options
                  static
                  className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                  {mainContent}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      {validationError && (
        <p className="mt-1 text-sm text-red-600">{validationError}</p>
      )}
    </div>
  );
};
