import React from "react";
import Details from "../components/SingleProduct/Details";
import UserHead from "../components/SingleProduct/UserHead";
import Description from "../components/SingleProduct/Description";
import ExtraValue from "../components/SingleProduct/ExtraValue";
import Featured from "../components/home/Featured";
import Property from "../components/home/Property";
import ScheduleTour from "../components/scheduleTour/ScheduleTour";

const SingleProduct = () => {
  window.scrollTo(0, 0);
  return (
    <div className="pb-10">
      <UserHead />

      <Details />
      <Description />
      <ExtraValue />
      <ScheduleTour />
      <Featured />
      <Property />
    </div>
  );
};

export default SingleProduct;
