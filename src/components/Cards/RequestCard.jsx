import React from "react";
import RequestBtn from "../buttons/RequestBtn";
import RequestDataCard from "./RequestDataCard";

const RequestCard = ({ Name, Location, KarubarName, Image }) => {
  return (
    <div className="flex w-full justify-between my-4">
      <RequestDataCard
        Name={Name}
        KarubarName={KarubarName}
        Location={Location}
        Image={Image}
      />
      <div className="flex flex-col gap-y-4 justify-between py-2 px-5 border-l-4 border-l-[#E5E9F3]">
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
      </div>
    </div>
  );
};

export default RequestCard;
