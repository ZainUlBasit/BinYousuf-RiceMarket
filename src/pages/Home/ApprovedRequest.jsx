import React, { useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import RequestIconBtn from "../../components/buttons/RequestIconBtn";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import RequestCard from "../../components/Cards/RequestCard";
import { FaRegEye } from "react-icons/fa";
import Requests from "../../components/Modals/Requests";
import { useNavigate } from "react-router-dom";

const ApprovedRequest = () => {
  const [SearchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const [SelectedId, setSelectedId] = useState("");
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Approved Requests"}
          value={SearchText}
          setValue={setSearchText}
        />
        {[12, 3, 4, 5, 6, 7, 8, 9, 10].map((dt, i) => {
          return (
            <RequestCard
              Name={"Test Name"}
              KarubarName={"Test karubar"}
              Location={"Test Location"}
              Image={"/images/store.png"}
              key={i}
            >
              <RequestIconBtn
                Icon={FaUserCheck}
                Title={"Approved User"}
                onClick={() => {
                  setOpen(!open);
                  setSelectedId(i);
                }}
                // Border="border-[#ED0000] border-[2px]"
                Color="text-[#20B038] w-[200px]"
              />
              <RequestIconBtn
                Icon={FaUserTimes}
                Title={"Block this User"}
                onClick={() => {
                  setOpen(!open);
                  setSelectedId(i);
                }}
                Border="border-[#D9A300] border-[2px]"
                Color="text-[#D9A300] w-[200px] hover:bg-[#D9A300] hover:text-white"
              />
              <div
                className="absolute -left-[55px] border-[1px] border-black hover:bg-black hover:text-white rounded-full py-2 px-2 cursor-pointer transition-all ease-in-out duration-500"
                onClick={() => navigate("/previous-orders/" + i)}
              >
                <FaRegEye className="text-xl" />
              </div>
            </RequestCard>
          );
        })}
      </div>
      {open && (
        <Requests
          open={open}
          setOpen={setOpen}
          type={"block"}
          onSubmit={() => alert("blocked")}
        />
      )}
    </HomeWrapper>
  );
};

export default ApprovedRequest;
