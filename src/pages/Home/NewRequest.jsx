import React, { useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import { IoSearchSharp } from "react-icons/io5";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestCard from "../../components/Cards/RequestCard";
import RequestBtn from "../../components/buttons/RequestBtn";

const NewRequest = () => {
  const [SearchText, setSearchText] = useState("");
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"New Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        >
          <RequestBtn
            Title={"Accept"}
            onClick={() => {}}
            Border="border-[#20B038] border-[2px]"
            Color="text-[#20B038] hover:text-white hover:bg-[#20B038]"
          />
          <RequestBtn
            Title={"REJECT"}
            onClick={() => {}}
            Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000] hover:text-white hover:bg-[#ED0000]"
          />
        </RequestCard>
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        >
          <RequestBtn
            Title={"Accept"}
            onClick={() => {}}
            Border="border-[#20B038] border-[2px]"
            Color="text-[#20B038] hover:text-white hover:bg-[#20B038]"
          />
          <RequestBtn
            Title={"REJECT"}
            onClick={() => {}}
            Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000] hover:text-white hover:bg-[#ED0000]"
          />
        </RequestCard>
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        >
          <RequestBtn
            Title={"Accept"}
            onClick={() => {}}
            Border="border-[#20B038] border-[2px]"
            Color="text-[#20B038] hover:text-white hover:bg-[#20B038]"
          />
          <RequestBtn
            Title={"REJECT"}
            onClick={() => {}}
            Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000] hover:text-white hover:bg-[#ED0000]"
          />
        </RequestCard>
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        >
          <RequestBtn
            Title={"Accept"}
            onClick={() => {}}
            Border="border-[#20B038] border-[2px]"
            Color="text-[#20B038] hover:text-white hover:bg-[#20B038]"
          />
          <RequestBtn
            Title={"REJECT"}
            onClick={() => {}}
            Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000] hover:text-white hover:bg-[#ED0000]"
          />
        </RequestCard>
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        >
          <RequestBtn
            Title={"Accept"}
            onClick={() => {}}
            Border="border-[#20B038] border-[2px]"
            Color="text-[#20B038] hover:text-white hover:bg-[#20B038]"
          />
          <RequestBtn
            Title={"REJECT"}
            onClick={() => {}}
            Border="border-[#ED0000] border-[2px]"
            Color="text-[#ED0000] hover:text-white hover:bg-[#ED0000]"
          />
        </RequestCard>
      </div>
    </HomeWrapper>
  );
};

export default NewRequest;
