import React from "react";
import RequestBtn from "../buttons/RequestBtn";
import RequestDataCard from "./RequestDataCard";

const RequestCard = ({ Name, Location, KarubarName, Image, children }) => {
  return (
    <div className="flex w-full justify-between my-4">
      <RequestDataCard
        Name={Name}
        KarubarName={KarubarName}
        Location={Location}
        Image={Image}
      />
      <div className="flex flex-col gap-y-4 justify-between py-2 px-5 border-l-4 border-l-[#E5E9F3] relative">
        {children}
      </div>
    </div>
  );
};

export default RequestCard;
