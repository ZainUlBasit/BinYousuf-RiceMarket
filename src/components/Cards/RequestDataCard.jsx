import React from "react";

const RequestDataCard = ({ Name, KarubarName, Location, Image }) => {
  return (
    <div className="flex">
      <img src={Image} alt="not founds" className="w-[195px] mr-4" />
      <div className="flex flex-col gap-y-3">
        <div>
          <div className="text-[#999FA6]">Name</div>
          <div className="text-black">{Name}</div>
        </div>
        <div>
          <div className="text-[#999FA6]">Karubar Ka Naam</div>
          <div className="text-black">{KarubarName}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="text-[#999FA6]">Location</div>
          <div className="text-black">{Location}</div>
        </div>
      </div>
    </div>
  );
};

export default RequestDataCard;
