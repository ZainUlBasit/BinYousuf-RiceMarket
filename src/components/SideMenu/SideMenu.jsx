import React, { useState } from "react";
import Avatar from "../../assets/images/Avatar.png";
import {
  MdArrowDownward,
  MdExitToApp,
  MdNotifications,
  MdNotificationsActive,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { StyledWrapperItem } from "./SideMenu.Styled";
import Union from "../../assets/images/Union.png";
import second from "../../assets/images/second.png";
import first from "../../assets/images/first.png";
import { IoIosArrowDown } from "react-icons/io";
import SideMenuItem from "./SideMenuItem";
import { TbReorder } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { motion } from "framer-motion";

const SideMenuData = [
  {
    title: "Users",
    Icon: PiUsers,
    SubItems: [
      { title: "New Requests", Link: "/new-requests" },
      { title: "Rejeted Requests", Link: "/rejected-requests" },
      { title: "Approved Requests", Link: "/approved-requests" },
      { title: "Blocked Requests", Link: "/blocked-requests" },
    ],
  },
  {
    title: "Orders",
    Icon: TbReorder,
    SubItems: [
      { title: "Pending Orders", Link: "/pending-orders" },
      { title: "Approved Orders", Link: "/approved-orders" },
      { title: "Delivered Orders", Link: "/delivered-orders" },
      { title: "Canceled Orders", Link: "/canceled-orders" },
    ],
  },
  {
    title: "Products",
    Icon: MdProductionQuantityLimits,
    Link: "/products",
  },
  {
    title: "Driver",
    Icon: CiDeliveryTruck,
    SubItems: [
      { title: "Driver List", Link: "/driver-all" },
      { title: "Ongoing Orders", Link: "/driver-ongoing-orders" },
      { title: "Delivered Orders", Link: "/driver-delivered-orders" },
    ],
    // Link: "/drivers",
  },
];

const SideMenu = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const [CurrentMenu, setCurrentMenu] = useState("");
  return (
    <div
      className="flex flex-col h-[90%] py-5 pb-0  w-[350px] rounded-[28px] overflow-hidden"
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
      }}
    >
      <motion.div
        variants={item}
        className="top flex items-center justify-between w-full px-10 border-b-2 border-b-[#fdf0c8] pb-5"
      >
        <div className="flex items-center gap-x-4">
          <img src={Avatar} className="w-[50px]" alt="image not found!" />
          <div className="flex flex-col">
            <div className="text-gray-400">Admin</div>
            <div className="name">Mustafa Afridi</div>
          </div>
        </div>
        <MdNotifications className="text-2xl" />
        {/* <MdNotificationsActive /> */}
      </motion.div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          {SideMenuData.map((dt) => {
            return (
              <SideMenuItem
                title={dt.title}
                Icon={dt.Icon}
                onClick={() => {
                  setCurrentMenu(dt.title);
                }}
                SubItems={dt.SubItems}
                CurrentMenu={CurrentMenu}
                setCurrentMenu={setCurrentMenu}
                Link={dt.Link ? dt.Link : false}
              />
            );
          })}
        </div>
        <div className="flex flex-col">
          <SideMenuItem
            title={"Logout"}
            Icon={MdExitToApp}
            onClick={() => {
              setCurrentMenu("");
            }}
            CurrentMenu={CurrentMenu}
            setCurrentMenu={setCurrentMenu}
            className="self-end"
            Active={true}
            Link={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
