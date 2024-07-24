import React, { useEffect, useState } from "react";
import { StyledWrapperItem } from "./SideMenu.Styled";
import second from "../../assets/images/second.png";
import first from "../../assets/images/first.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { showSuccessAlert } from "../../utils/AlertMessage";

const SideMenuItem = ({
  title,
  Icon,
  onClick,
  SubItems,
  setCurrentMenu,
  CurrentMenu,
  Active,
  Link,
}) => {
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const navigate = useNavigate();
  const location = useLocation();

  // Access pathname from location object
  const { pathname } = location;

  useEffect(() => {
    if (SubItems) {
      SubItems.map((data) => {
        if (data.Link === pathname) {
          setCurrentMenu(title);
        }
      });
    } else {
      if (Link === pathname) setCurrentMenu(title);
    }
  }, []);

  return (
    <StyledWrapperItem className="flex flex-col items-center">
      <motion.div
        className="flex flex-col w-[250px] mt-4"
        variants={container}
        initial="hidden"
        animate="visible"
        onClick={() => {
          if (title === "Logout") {
            showSuccessAlert("Logout Successfully", "");
            onClick();
          }
        }}
      >
        <motion.div
          variants={item}
          className={`select-none flex w-full justify-between items-center py-3 ${
            CurrentMenu === title || Active ? "bg-[#f5eac8]" : ""
          } px-5 rounded-lg`}
          onClick={() => {
            if (CurrentMenu === title) setCurrentMenu("");
            else setCurrentMenu(title);
            if (!SubItems) navigate(Link);
          }}
        >
          <div className="flex items-center gap-x-3">
            <Icon className="text-2xl" />

            <span>{title}</span>
          </div>
          {SubItems && CurrentMenu !== title ? (
            <IoIosArrowDown className="text-2xl" />
          ) : (
            SubItems && (
              <IoIosArrowUp
                className="text-2xl"
                onClick={() => {
                  if (CurrentMenu === title) setCurrentMenu("");
                  else setCurrentMenu(title);
                }}
              />
            )
          )}
        </motion.div>
        {CurrentMenu === title &&
          SubItems?.filter((dt) => dt.Link === pathname) && (
            <motion.div
              variants={item}
              className="flex flex-col gap-y-2 relative pl-4 mt-4 sidemenu select-none"
            >
              {SubItems.map((data, index) => {
                return (
                  <div className="relative">
                    <img
                      src={index === 0 ? first : second}
                      className={
                        index === 0
                          ? "h-[30px] absolute -top-[6px]"
                          : "h-[70px] absolute -top-12"
                      }
                    />
                    <div
                      className={`ml-5 py-2 ${
                        pathname === data.Link ? "bg-[#f5eac8]" : ""
                      } px-5 rounded-lg`}
                      onClick={() => {
                        navigate(data.Link);
                      }}
                    >
                      {data.title}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        {/* <div className="flex flex-col gap-y-2 relative pl-4 mt-4">
          <div className="relative">
            <img src={first} className="h-[30px] absolute -top-[6px]" />
            <div className="ml-5 py-3 bg-[#f5eac8] px-5 rounded-lg">
              New Requests
            </div>
          </div>
          <div className="relative">
            <img src={second} className="h-[70px] absolute -top-12" />
            <div className="ml-5 py-3 bg-[#f5eac8] px-5 rounded-lg">
              Rejected Users
            </div>
          </div>
          <div className="relative">
            <img src={second} className="h-[70px] absolute -top-12" />
            <div className="ml-5 py-3 bg-[#f5eac8] px-5 rounded-lg">
              Approved Users
            </div>
          </div>
          <div className="relative">
            <img src={second} className="h-[70px] absolute -top-12" />
            <div className="ml-5 py-3 bg-[#f5eac8] px-5 rounded-lg">
              Blocked Users
            </div>
          </div>
        </div> */}
      </motion.div>
    </StyledWrapperItem>
  );
};

export default SideMenuItem;
