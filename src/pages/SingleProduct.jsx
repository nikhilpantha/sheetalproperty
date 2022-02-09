import React from "react";
import Details from "../components/SingleProduct/Details";
import UserHead from "../components/SingleProduct/UserHead";
import Description from "../components/SingleProduct/Description";
import ExtraValue from "../components/SingleProduct/ExtraValue";
import Featured from "../components/home/Featured";
import Property from "../components/home/Property";

const SingleProduct = () => {
  return (
    <div className="pb-10">
      <UserHead />
      <Details />
      <Description />
      <ExtraValue />
      <Featured />
      <Property />
    </div>
  );
};

export default SingleProduct;
