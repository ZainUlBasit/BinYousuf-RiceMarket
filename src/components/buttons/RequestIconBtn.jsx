import React from "react";

const RequestIconBtn = ({ Title, Icon, Border, Color, onClick }) => {
  return (
    <button
      className={`px-3 py-2 ${Border ? Border : ""} ${
        Color ? Color : ""
      } font-bold rounded-2xl w-[169px] transition-all ease-in-out duration-500 flex gap-x-2`}
      onClick={onClick}
    >
      <Icon className="text-2xl" />
      <span>{Title}</span>
    </button>
  );
};

export default RequestIconBtn;
