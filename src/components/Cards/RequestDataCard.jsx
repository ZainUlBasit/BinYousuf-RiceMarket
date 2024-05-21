import React from "react";
import { motion } from "framer-motion";

const RequestDataCard = ({ Name, KarubarName, Location, Image }) => {
  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div variants={item} className="flex">
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
    </motion.div>
  );
};

export default RequestDataCard;
