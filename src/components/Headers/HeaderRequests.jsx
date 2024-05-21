import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderRequests = ({ title, value, setValue }) => {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const headerTExt = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const searchBOx = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex w-full justify-between items-center"
    >
      <motion.h1
        variants={headerTExt}
        className="font-[500] font-sans text-3xl flex items-center gap-x-4"
      >
        {(title === "User Detail" || title === "Previous Order") && (
          <FaArrowLeft
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
        )}
        {title}
      </motion.h1>
      <motion.div
        variants={searchBOx}
        className="w-[350px] border-2 border-black rounded-full overflow-hidden relative flex justify-between items-center px-2 py-1"
      >
        <input
          placeholder="Search..."
          className="h-full outline-none text-[15px] w-full -z-1 pl-2 font-sans font-bold"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex bg-[#fff8ea] px-2 py-2 rounded-full z-1">
          <IoSearchSharp className="text-2xl text-[#FFD352]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeaderRequests;
