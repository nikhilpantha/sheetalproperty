import React from "react";
import AgentSearch from "../components/Common/SearchBox/AgentSearch";
import AgentList from "../components/findAgent/AgentList";
import NoAgentFound from "../components/findAgent/NoAgentFound";

const FindAgent = () => {
  return (
    <div className=" py-10 md:p-10 space-y-5 md:space-y-10">
      <div className="text-xl font-bold px-5 md:px-0">Find an Agent</div>
      <AgentSearch />
      {/* <NoAgentFound /> */}
      <AgentList />
    </div>
  );
};

export default FindAgent;
