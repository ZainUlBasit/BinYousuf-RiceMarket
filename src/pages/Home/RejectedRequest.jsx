import React, { useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestCard from "../../components/Cards/RequestCard";
import { TbUserCancel } from "react-icons/tb";
import RequestIconBtn from "../../components/buttons/RequestIconBtn";
import RequestBtn from "../../components/buttons/RequestBtn";

const RejectedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Rejected Requests"}
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
            Icon={TbUserCancel}
            Title={"Rejected User"}
            onClick={() => {}}
            // Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000]"
          />
          <RequestBtn
            // Icon={TbUserCancel}
            Title={"View New Details"}
            onClick={() => {}}
            Border="border-[#5090E8] border-[2px]"
            Color="text-[#5090E8] hover:text-white hover:bg-[#5090E8]"
          />
        </RequestCard>
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        >
          <RequestIconBtn
            Icon={TbUserCancel}
            Title={"Rejected User"}
            onClick={() => {}}
            // Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000]"
          />
          <RequestBtn
            // Icon={TbUserCancel}
            Title={"View New Details"}
            onClick={() => {}}
            Border="border-[#5090E8] border-[2px]"
            Color="text-[#5090E8] hover:text-white hover:bg-[#5090E8]"
          />
        </RequestCard>
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        >
          <RequestIconBtn
            Icon={TbUserCancel}
            Title={"Rejected User"}
            onClick={() => {}}
            // Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000]"
          />
          <RequestBtn
            // Icon={TbUserCancel}
            Title={"View New Details"}
            onClick={() => {}}
            Border="border-[#5090E8] border-[2px]"
            Color="text-[#5090E8] hover:text-white hover:bg-[#5090E8]"
          />
        </RequestCard>
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        >
          <RequestIconBtn
            Icon={TbUserCancel}
            Title={"Rejected User"}
            onClick={() => {}}
            // Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000]"
          />
          <RequestBtn
            // Icon={TbUserCancel}
            Title={"View New Details"}
            onClick={() => {}}
            Border="border-[#5090E8] border-[2px]"
            Color="text-[#5090E8] hover:text-white hover:bg-[#5090E8]"
          />
        </RequestCard>
      </div>
    </HomeWrapper>
  );
};

export default RejectedRequest;
