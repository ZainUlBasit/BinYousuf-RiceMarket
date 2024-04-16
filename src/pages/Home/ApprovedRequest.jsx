import React, { useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestIconBtn from "../../components/buttons/RequestIconBtn";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import RequestCard from "../../components/Cards/RequestCard";
import { FaRegEye } from "react-icons/fa";

const ApprovedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Approved Requests"}
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
            Title={"Approved User"}
            onClick={() => {}}
            // Border="border-[#ED0000] border-[2px]"
            Color="text-[#20B038] w-[200px]"
          />
          <RequestIconBtn
            Icon={FaUserTimes}
            Title={"Block this User"}
            onClick={() => {}}
            Border="border-[#D9A300] border-[2px]"
            Color="text-[#D9A300] w-[200px] hover:bg-[#D9A300] hover:text-white"
          />
          <div className="absolute -left-[55px] border-[1px] border-black hover:bg-black hover:text-white rounded-full py-2 px-2 cursor-pointer transition-all ease-in-out duration-500">
            <FaRegEye className="text-xl" />
          </div>
        </RequestCard>
      </div>
    </HomeWrapper>
  );
};

export default ApprovedRequest;
