import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";

const PendingIcon = () => {
  return (
    <div className="p-4 bg-[#F5F5FF] rounded-full">
      <div className="p-1 bg-yellow-500 rounded-full">
        <MdOutlinePendingActions className="text-white text-[0.75rem]" />
      </div>
    </div>
  );
};

export default PendingIcon;
