import React from "react";
import { FaTimes } from "react-icons/fa";

const ErrorIcon = () => {
  return (
    <div className="p-4 bg-[#F5F5FF] rounded-full">
      <div className="p-1 bg-[#D93A3A] rounded-full">
        <FaTimes className="text-white text-[0.75rem]" />
      </div>
    </div>
  );
};

export default ErrorIcon;
