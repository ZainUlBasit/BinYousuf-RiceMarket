import React, { useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";

const RejectedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  return (
    <HomeWrapper>
      <div className="flex w-full h-fit py-10">
        <HeaderRequests
          title={"Rejected Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
      </div>
    </HomeWrapper>
  );
};

export default RejectedRequest;
