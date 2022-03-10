import React, { useState } from "react";
import InputBox from "./InputBox";
import { searchNav } from "../../Object/serachNav";

const Search = ({ passActive }) => {
  const [pactive, setPActive] = useState({ passActive });
  const [active, setActive] = useState();
  console.log(passActive);
  console.log(active);

  return (
    <>
      <div className="flex justify-center px-5 md:px-10">
        <div className="w-full xl:w-9/12 -mt-40 md:-mt-32 md:bg-white rounded md:shadow-xl md:border border-gray-100 md:p-5 lg:p-10">
          <div className="flex xl:w-4/5  sm:text-lg items-center justify-start font-bold overflow-x-auto">
            {searchNav.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(item.name)}
                className={`${
                  active === item.name
                    ? "bg-red-700 text-white"
                    : "text-white md:text-black"
                }   font-medium p-2 px-4 sm:px-6 min-w-max`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <InputBox />
        </div>
      </div>
    </>
  );
};

export default Search;
