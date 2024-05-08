import React, { useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestCard from "../../components/Cards/RequestCard";
import RequestIconBtn from "../../components/buttons/RequestIconBtn";
import { FaUserCheck } from "react-icons/fa";
import { TbUserCancel } from "react-icons/tb";
import Requests from "../../components/Modals/Requests";

const BlockedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Blocked Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((dt, i) => {
          return (
            <RequestCard
              Name={"Test No"}
              KarubarName={"Test karubar"}
              Location={"Test Location"}
              Image={"/images/store.png"}
            >
              {/* <RequestIconBtn
            Icon={FaUserCheck}
            Title={"Rejected User"}
            onClick={() => {}}
            // Border="border-[#ED0000] border-[2px]"
            Color="text-[#20B038]"
          /> */}
              <RequestIconBtn
                Icon={TbUserCancel}
                Title={"Unblock"}
                onClick={() => setOpen(!open)}
                Border="border-[#D9A300] border-[2px]"
                Color="text-[#D9A300]"
              />
            </RequestCard>
          );
        })}
      </div>
      {open && (
        <Requests
          open={open}
          setOpen={setOpen}
          type={"unblock"}
          onSubmit={() => alert("unblocked")}
        />
      )}
    </HomeWrapper>
  );
};

export default BlockedRequest;
