import React from "react";
import Details from "../components/SingleProduct/Details";
import UserHead from "../components/SingleProduct/UserHead";
import Description from "../components/SingleProduct/Description";
import ExtraValue from "../components/SingleProduct/ExtraValue";

const SingleProduct = () => {
  return (
    <div className="relative">
      <UserHead />
      <Details />
      <Description />
      <ExtraValue />
    </div>
  );
};

export default SingleProduct;
