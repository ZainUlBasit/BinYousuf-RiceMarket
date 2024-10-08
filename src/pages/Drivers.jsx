import React, { useState } from "react";
import HomeWrapper from "../components/Wrapper/HomeWrapper";
import HeaderRequests from "../components/Headers/HeaderRequests";

const Drivers = () => {
  const [SearchText, setSearchText] = useState("");
  return (
    <div>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Drivers List"}
          value={SearchText}
          setValue={setSearchText}
        />
      </div>
    </div>
  );
};

export default Drivers;
