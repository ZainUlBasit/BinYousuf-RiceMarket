import React from "react";
import { MdNotifications } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import SideMenu from "../../components/SideMenu/SideMenu";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="flex w-full h-screen px-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex h-full items-center !w-[400px] mr-10"
      >
        <SideMenu />
      </motion.div>
      <div className="flex w-full">Right side</div>
    </div>
  );
};

export default Home;
