import { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import DashBoard from "../DashBoard";
import Properties from "../Properties";
import Messages from "../Messages";
import { Link, useSearchParams } from "react-router-dom";
import NoData from "../NoData";
import LogOut from "../LogOut";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const navigation = [
  { name: "My Profile", href: "profile", icon: HomeIcon, current: true },
  {
    name: "Favourite Properties",
    href: "favourites",
    icon: UsersIcon,
    current: false,
  },
  { name: "Saved Searches", href: "saved", icon: FolderIcon, current: false },
  { name: "Messages", href: "messages", icon: CalendarIcon, current: false },
  { name: "Logout", href: "logout", icon: InboxIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SideBar = ({ menubutton }) => {
  const [params, setParams] = useSearchParams();
  const query = params.get("section");
  const mainComponent = {
    profile: <DashBoard />,
    favourites: <Properties />,
    messages: <Messages />,
    saved: <NoData />,
    logout: <LogOut />,
  };

  return (
    <>
      <div className="flex">
        <div className="hidden md:flex md:w-64 flex-col ">
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex flex-col items-center flex-shrink-0 px-4">
                <div className={`relative m-4`}>
                  <img
                    className="w-full h-auto"
                    src="noUser.png"
                    alt="Workflow"
                  />
                  <form>
                    <div className="absolute bottom-0 left-0 right-0 w-full bg-opacity-70 bg-black text-white py-2 flex space-x-2 justify-center">
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="contained-button-file"
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "none" }}
                          component="span"
                          className="w-full bg-opacity-70 bg-black text-white py-2 flex space-x-2 justify-center"
                        >
                          <span>Upload</span>
                          <MdOutlineDriveFolderUpload className="w-5 h-5" />
                        </Button>
                      </label>
                    </div>
                  </form>
                </div>
                <div className="text-red-700 font-medium">Ram Parajuli</div>
              </div>
              <nav className="mt-10 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} to={`/myProfile?section=${item.href}`}>
                    <button
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <main className="flex-1">
            {!query ? mainComponent["profile"] : mainComponent[query]}
          </main>
        </div>
      </div>
    </>
  );
};

export default SideBar;
