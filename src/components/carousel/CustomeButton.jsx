import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";

export const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="absolute bottom-0 right-1  focus:outline-none"
    >
      <BsArrowRightCircle className="h-10 w-10 text-gray-600" />
    </button>
  );
};

export const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="absolute bottom-0 left-1  focus:outline-none"
    >
      <BsArrowLeftCircle className="h-10 w-10 text-gray-600" />
    </button>
  );
};
