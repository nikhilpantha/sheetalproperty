import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillCheckCircle } from "react-icons/ai";
import { product } from "../Object/product";
import ContactModel from "../SingleProduct/ContactModel";

const Details = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="space-y-7">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Budhanilkantha View Tower</h1>
          <p className="text-gray-700 text-sm">By : {product.by}</p>
        </div>
        <div>
          <div className="flex space-x-3 items-center py-3">
            <HiLocationMarker className="w-5 text-red-700 h-5" />
            <span>{product.address}</span>
          </div>
          <div className="flex space-x-3 items-center">
            <AiFillCheckCircle className="w-5 text-red-700 h-5" />
            <span>{product.status}</span>
          </div>
        </div>
        <div className="text-2xl font-bold">{product.price}</div>
        <div>
          <button
            onClick={() => setOpen(true)}
            href="/contact"
            className="px-5 text-white bg-red-700 rounded py-3"
          >
            Contact Now
          </button>
        </div>
      </div>
      <ContactModel open={open} setOpen={setOpen} />
    </>
  );
};

export default Details;
