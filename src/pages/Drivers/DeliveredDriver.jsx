import React, { useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";

const DeliveredDriver = () => {
  const [SearchText, setSearchText] = useState("");
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Delivered Orders"}
          value={SearchText}
          setValue={setSearchText}
        />
      </div>
      ;
    </HomeWrapper>
  );
};

export default DeliveredDriver;
