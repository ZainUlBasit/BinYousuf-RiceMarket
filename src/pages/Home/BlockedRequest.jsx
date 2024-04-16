import React, { useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestCard from "../../components/Cards/RequestCard";
import RequestIconBtn from "../../components/buttons/RequestIconBtn";

const BlockedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Blocked Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        >
          <RequestIconBtn
            Icon={FaUserCheck}
            Title={"Rejected User"}
            onClick={() => {}}
            // Border="border-[#ED0000] border-[2px]"
            Color="text-[#20B038]"
          />
          <RequestIconBtn
            Icon={TbUserCancel}
            Title={"Rejected User"}
            onClick={() => {}}
            // Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000]"
          />
        </RequestCard>
      </div>
    </HomeWrapper>
  );
};

export default BlockedRequest;
