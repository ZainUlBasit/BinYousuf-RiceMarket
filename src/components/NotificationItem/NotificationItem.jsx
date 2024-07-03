import React from "react";
import SuccessIcon from "./SuccessIcon";
import ErrorIcon from "./ErrorIcon";

// type === 1 ? success : error
const NotificationItem = ({ type, desc, date, border }) => {
  return (
    <div
      className={`flex gap-x-4 py-4 px-3 ${
        border ? "border-b-[2px] border-b-[#8787873a]" : ""
      }`}
    >
      {type ? <SuccessIcon /> : <ErrorIcon />}
      <div className="flex flex-col">
        <div className="font-[600] text-[1rem]">{desc}</div>
        <div className="font-[300] text-sm">{date}</div>
      </div>
    </div>
  );
};

export default NotificationItem;
