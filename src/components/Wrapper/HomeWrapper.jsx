import React from "react";
import SideMenu from "../SideMenu/SideMenu";

const HomeWrapper = ({ children }) => {
  return (
    <div className="flex w-[100%] h-screen px-10">
      <div className="flex h-full items-center !w-[400px] mr-10">
        <SideMenu />
      </div>
      {children}
    </div>
  );
};

export default HomeWrapper;
