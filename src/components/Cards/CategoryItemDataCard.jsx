import React from "react";
import { motion } from "framer-motion";

const CategoryItemDataCard = ({ data }) => {
  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div variants={item} className="flex items-center">
      <img
        src={data.attachment}
        alt="not founds"
        className="h-[92.58px] mr-4"
      />
      <div className="flex flex-col max-w-[300px]">
        <div className="flex flex-col">
          <div className="text-black font-bold">{data.name}</div>
          <div className="text-black">{data.weight}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryItemDataCard;
