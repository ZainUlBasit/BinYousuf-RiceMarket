import React from "react";
import { motion } from "framer-motion";

const SubCategoryDataCard = ({ data }) => {
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
        className="w-[120px] h-[100px] mr-4"
      />
      <div className="flex flex-col max-w-[300px]">
        <div className="">
          <div className="text-black font-bold">{data.name}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubCategoryDataCard;
