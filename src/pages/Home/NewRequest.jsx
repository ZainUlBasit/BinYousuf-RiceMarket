import React from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import { IoSearchSharp } from "react-icons/io5";

const NewRequest = () => {
  return (
    <HomeWrapper>
      <div className="flex w-full h-fit py-10">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-[500] font-sans text-3xl">User Requests</h1>
          <div className="flex w-[350px] border-2 border-black rounded-3xl overflow-hidden py-[10px] px-3 relative">
            <input
              placeholder="Search..."
              className="h-full outline-none text-[15px] w-full -z-1"
            />
            <div className="flex bg-[#fff8ea] absolute right-1 top-[2px] px-2 py-2 rounded-full z-1">
              <IoSearchSharp className="text-2xl text-[#FFD352]" />
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default NewRequest;
