import React from "react";
import { FaCheck } from "react-icons/fa";

const SuccessIcon = () => {
  return (
    <div className="p-4 bg-[#F5F5FF] rounded-full">
      <div className="p-1 bg-[#27AE60] rounded-full">
        <FaCheck className="text-white text-[0.75rem]" />
      </div>
    </div>
  );
};

export default SuccessIcon;
