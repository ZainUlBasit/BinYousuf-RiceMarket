import React from "react";

const AuthBtn = ({ Title, onClick }) => {
  return (
    <button
      className="w-[350px] bg-[#F8C21F] py-3 rounded-lg text-white font-bold outline-none"
      onClick={onClick}
    >
      {Title}
    </button>
  );
};

export default AuthBtn;
