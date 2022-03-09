import React from "react";
import { ChevronRightIcon, MailIcon } from "@heroicons/react/solid";

const applications = [
  {
    applicant: {
      name: "Ricardo Cooper",
      phone: "+977 9818273645",
      email: "ricardo.cooper@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    phone: "+977 9818273645",
    dateFull: "January 7, 2020",
    stage: "No local reviews yet.",
  },
  {
    applicant: {
      name: "Kristen Ramos",
      phone: "+977 9818273645",
      email: "kristen.ramos@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    phone: "+977 9818273645",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Ted Fox",
      phone: "+977 9818273645",
      email: "ted.fox@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
];
const AgentList = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {applications.map((application) => (
          <li key={application.applicant.email}>
            <a href={application.href} className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={application.applicant.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid lg:grid-cols-3 items-center md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-red-600 truncate">
                        {application.applicant.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <MailIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="truncate">
                          {application.applicant.email}
                        </span>
                      </p>
                    </div>
                    <div className="hidden lg:block">
                      <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe
                            width="250"
                            height="90"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            scrolling="no"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          {application.stage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="/singleAgent">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;
