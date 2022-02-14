import React, { useState } from "react";
/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/solid";
import RentOnline from "./RentOnline";
import CardForm from "./CardForm";

const RentOnilneSteps = () => {
  const [select, setSelect] = useState(1);
  console.log(select);
  const steps = [
    {
      id: 1,
      name: "Job details",
      href: "#",
      status: "current",
      form: <RentOnline setSelect={setSelect} />,
    },
    {
      id: 2,
      name: "Application form",
      href: "#",
      status: "current",
      form: <CardForm setSelect={setSelect} />,
    },
  ];
  return (
    <div className="px-5 py-10 md:px-10 border-t-2 border-gray-300">
      {/* <nav aria-label="Progress">
        <ol
          role="list"
          className="lg:w-1/2 border border-gray-300 rounded-md divide-y divide-gray-300 xs:flex xs:divide-y-0"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative xs:flex-1 xs:flex">
              {step.status === "complete" ? (
                <a href={step.href} className="group flex items-center w-full">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full group-hover:bg-red-800">
                      <CheckIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              ) : step.status === "current" ? (
                <a
                  href={step.href}
                  className="px-6 py-4 flex items-center text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-red-600 rounded-full">
                    <span className="text-red-600">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-red-600">
                    {step.name}
                  </span>
                </a>
              ) : (
                <a href={step.href} className="group flex items-center">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                
                  <div
                    className="hidden xs:block absolute top-0 right-0 h-full w-5"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav> */}
      <div className="p-10 text-center text-4xl font-light">Apply Online</div>

      {steps.map((step, stepIdx) => {
        console.log(step.id);
        return <div key={stepIdx}>{step.id === select && step.form}</div>;
      })}
    </div>
  );
};

export default RentOnilneSteps;
