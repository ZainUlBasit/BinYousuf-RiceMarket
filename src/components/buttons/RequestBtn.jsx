import React from "react";

const RequestBtn = ({ Title, Border, Color, onClick }) => {
  return (
    <button
      className={`px-3 py-2 ${Border ? Border : ""} ${
        Color ? Color : ""
      } font-bold rounded-2xl w-[169px] transition-all ease-in-out duration-500`}
      onClick={onClick}
    >
      {Title}
    </button>
  );
};

export default RequestBtn;
