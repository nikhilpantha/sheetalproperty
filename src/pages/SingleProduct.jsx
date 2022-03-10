import React, { useState } from "react";

import Details from "../components/SingleProduct/Details";
import UserHead from "../components/SingleProduct/UserHead";
import Description from "../components/SingleProduct/Description";
// import ExtraValue from "../components/SingleProduct/ExtraValue";
import Featured from "../components/home/Featured";
import Property from "../components/home/Property";
import ScheduleTour from "../components/scheduleTour/ScheduleTour";
import ContactModel from "../components/SingleProduct/ContactModel";

const SingleProduct = () => {
  const [open, setOpen] = useState(false);
  window.scrollTo(0, 0);
  return (
    <>
      <div className="pb-10">
        <UserHead setOpen={setOpen} />
        <Details setOpen={setOpen} />
        <Description />
        {/* <ExtraValue /> */}
        <ScheduleTour />
        <Featured />
        <Property />
      </div>
      <ContactModel open={open} setOpen={setOpen} />
    </>
  );
};

export default SingleProduct;
