import React from "react";
import SuccessIcon from "./SuccessIcon";
import ErrorIcon from "./ErrorIcon";
import PendingIcon from "./PendingIcon";
import ApprovedIcon from "./ApprovedIcon";
import DeliveredIcon from "./DeliveredIcon";

// type === 1 ? success : error
const NotificationItem = ({ type, desc, date, border }) => {
  return (
    <div
      className={`flex gap-x-4 py-4 px-3 items-start ${
        border ? "border-b-[2px] border-b-[#8787873a]" : ""
      }`}
    >
      {type === 0 ? (
        <PendingIcon />
      ) : type === 1 ? (
        <ApprovedIcon />
      ) : type === 2 ? (
        <DeliveredIcon />
      ) : (
        type === 3 && <ErrorIcon />
      )}
      <div className="flex flex-col">
        <div className="font-[600] text-[1rem]">{desc}</div>
        <div className="font-[300] text-sm">{date}</div>
      </div>
    </div>
  );
};

export default NotificationItem;
