import React, { useState } from "react";
import StoreImage from "../../assets/images/store_detail.png";
import HomeWrapper from "../Wrapper/HomeWrapper";
import HeaderRequests from "../Headers/HeaderRequests";
import CnicFront from "../../assets/images/cnic front.png";
import CnicBack from "../../assets/images/cnic back.png";

const UserDetail = () => {
  const [SearchText, setSearchText] = useState("");

  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"User Detail"}
          value={SearchText}
          setValue={setSearchText}
        />
        <img src={StoreImage} alt="" className="mt-5" />
        <div className="flex gap-x-5">
          <div className="flex flex-col gap-y-2">
            <div className="">
              <div className="text-[#808080] font-bold text-2xl">Name</div>
              <div className="text-lg">Mustafa</div>
            </div>
            <div className="">
              <div className="text-[#808080] font-bold text-2xl">
                Kaarubar ka naam
              </div>
              <div className="text-lg">Madina Rice Traders</div>
            </div>
            <div className="">
              <div className="text-[#808080] font-bold text-2xl">Location</div>
              <div className="text-lg">Peshawar</div>
            </div>
            <div className="">
              <div className="text-[#808080] font-bold text-2xl">
                Mobile Number
              </div>
              <div className="text-lg">0300-1234567</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="text-[#808080] font-bold text-2xl">
              Cnic ki tasweer
            </div>
            <div className="flex gap-x-4">
              <div className="flex flex-col items-center justify-center">
                <img className="w-[230px]" src={CnicFront} alt="" />
                <span>Front</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img className="w-[230px]" src={CnicBack} alt="" />
                <span>Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default UserDetail;
