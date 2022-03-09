import React from "react";
import About from "../components/findAgent/SingleAgent/About";
import ContactForm from "../components/findAgent/SingleAgent/ContactForm";
import PersonalInfo from "../components/findAgent/SingleAgent/PersonalInfo";

const SingleAgent = () => {
  return (
    <div className="p-5 lg:p-10 grid gap-20 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-10">
        <PersonalInfo />
        <About />
      </div>
      <div>
        <ContactForm />
      </div>
      
    </div>
  );
};

export default SingleAgent;
