import React, { useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";

const ApprovedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  return (
    <HomeWrapper>
      <div className="flex w-full h-fit py-10">
        <HeaderRequests
          title={"Approved Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
      </div>
    </HomeWrapper>
  );
};

export default ApprovedRequest;
