import React, { useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import { IoSearchSharp } from "react-icons/io5";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestCard from "../../components/Cards/RequestCard";

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
        />
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        />
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        />
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        />
        <RequestCard
          Name={"Test Name"}
          KarubarName={"Test karubar"}
          Location={"Test Location"}
          Image={"/images/store.png"}
        />
      </div>
    </HomeWrapper>
  );
};

export default NewRequest;
