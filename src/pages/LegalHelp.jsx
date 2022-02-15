import React from "react";
import Contact from "../components/Common/Contact";
import AskOnline from "../components/Service/Help/AskOnline";
import LegalHelpp from "../components/Service/Help/LegalHelp";

const LegalHelp = () => {
  return (
    <div>
      <LegalHelpp />
      <AskOnline />
      <Contact />
    </div>
  );
};

export default LegalHelp;
