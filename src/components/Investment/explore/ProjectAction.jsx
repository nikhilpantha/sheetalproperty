import React from "react";

const ProjectAction = () => {
  const action = [
    {
      project: 52,
      title: "Ready To Move Apartment",
    },
    {
      project: 5,
      title: "Possesion in 2022",
    },
    {
      project: 52,
      title: "40L-80L",
    },
    {
      project: 12,
      title: "Possesion in 2022",
    },
    {
      project: 89,
      title: "R40L-80Lnt",
    },
    {
      project: 43,
      title: "Possesion in 2022",
    },
    {
      project: 52,
      title: "Upto 40L",
    },
  ];
  const tabs = [
    {
      name: "My Account",
      current: false,
    },
    { name: "Company", href: "#", current: false },
    { name: "Team Members", href: "#", current: true },
    { name: "Billing", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  function SelectTabs() {
    console.log("tabs");
  }

  return (
    <div className="py-10">
      <div className="my-10 text-xl font-medium">Projects in Action</div>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={SelectTabs}
                  className={classNames(
                    tab.current
                      ? "border-red-500 text-red-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 ">
        {action.map((item, index) => (
          <div className="flex space-x-3 items-center" key={index}>
            <div className="flex flex-col border-r-2 p-2 ">
              <span className="text-xl text-center">{item.project}</span>
              <span className="uppercase font-light">project</span>
            </div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAction;
