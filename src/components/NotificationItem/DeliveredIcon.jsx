import React from "react";
import { FaTimes } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const DeliveredIcon = () => {
  return (
    <div className="p-4 bg-[#F5F5FF] rounded-full">
      <div className="p-1 bg-green-500 rounded-full">
        <TbTruckDelivery className="text-white text-[0.85rem]" />
      </div>
    </div>
  );
};

export default DeliveredIcon;
