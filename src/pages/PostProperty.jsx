import React, { useState } from "react";
import FormStep2 from "../components/PostProperty/FormSteep2";
import FormStep1 from "../components/PostProperty/FormStep1";

const PostProperty = () => {
  const [formStep, setFormStep] = useState(0);
  const steps = [
    {
      name: "Step 1",
      status: <FormStep1 setFormStep={setFormStep} />,
    },
    {
      name: "Step 2",
      status: <FormStep2 setFormStep={setFormStep} />,
    },
  ];
  return (
    <div>
      <div className="flex justify-end text-red-700 text-sm pt-5 pr-5">
        Step {formStep}/2
      </div>
      {steps.map((item, index) => (
        <div key={index}>{formStep === index && item.status}</div>
      ))}
    </div>
  );
};

export default PostProperty;
