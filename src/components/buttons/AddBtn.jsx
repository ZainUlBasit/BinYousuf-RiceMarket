import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const AddBtn = ({ onSubmit, title }) => {
  return (
    <div
      className="flex items-center gap-x-2 border-2 border-black px-2 py-1 rounded-full text-black hover:bg-black hover:text-white transition-all ease-in-out duration-500 cursor-pointer"
      onClick={onSubmit}
    >
      <div>{title}</div>
      <FiPlusCircle className="text-2xl" />
    </div>
  );
};

export default AddBtn;
