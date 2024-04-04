import React from "react";
import SideMenu from "../../components/SideMenu/SideMenu";

const NewRequest = () => {
  return (
    <div className="flex w-full h-screen px-10">
      <div className="flex h-full items-center !w-[400px] mr-10">
        <SideMenu />
      </div>
      <div className="flex w-full">Right side</div>
    </div>
  );
};

export default NewRequest;
