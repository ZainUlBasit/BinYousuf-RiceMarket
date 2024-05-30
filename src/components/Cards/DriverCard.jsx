import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import DeleteModal from "../Modals/DeleteModal";
import EditCategoryModal from "../Modals/EditCategoryModal";
import DriverImage from "../../assets/images/driver.png";

const DriverCard = ({
  title,
  imgSrc,
  setOpenDeleteModal,
  setOpenEditModal,
  setSelectedId,
}) => {
  // const [OpenEditModal, setOpenEditModal] = useState(false);
  // const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const productItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const productItemImg = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const productItemBtnLeft = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const productItemBtnRight = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={productItem}
      className="flex flex-col w-[230px] h-[290px] justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-5 rounded-[10px] select-none"
    >
      <motion.div
        variants={productItemImg}
        className="flex flex-col items-center justify-center gap-y-2"
      >
        <img
          src={DriverImage}
          alt="image not found"
          className="w-[100px] h-[100px] rounded-full"
          style={{ objectFit: "contain" }} // Ensure image covers container
        />
        <div className="font-bold">{title}</div>
        <div className="flex w-full flex-col px-4">
          <div className="flex justify-between">
            <div className="font-bold">Cnic:</div>
            <div className="">12323-2332332-3</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Mobile No:</div>
            <div className="">0311-1234567</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Vehicle no:</div>
            <div className="">AD20</div>
          </div>
        </div>
      </motion.div>
      <div className="flex w-full border-[#F8C21F] border-[2px] rounded-bl-[10px] rounded-br-[10px]">
        <motion.div
          variants={productItemBtnRight}
          className="flex py-3 w-full h-full items-center justify-center border-r-[#F8C21F] border-r-[1px] hover:bg-[#F8C21F] cursor-pointer hover:text-[red]"
          onClick={() => setOpenDeleteModal(true)}
        >
          <FaTrash />
        </motion.div>
        <motion.div
          variants={productItemBtnLeft}
          className="flex py-3 w-full h-full items-center justify-center border-l-[#F8C21F] border-l-[1px] hover:bg-[#F8C21F] cursor-pointer hover:text-[green]"
          onClick={() => setOpenEditModal(true)}
        >
          <FaEdit />
        </motion.div>
      </div>
      {/* {OpenDeleteModal && (
        <DeleteModal
          open={OpenDeleteModal}
          setOpen={setOpenDeleteModal}
          onSubmit={() => {}}
        />
      )}

      {OpenEditModal && (
        <EditCategoryModal
          open={OpenEditModal}
          setOpen={setOpenEditModal}
          onSubmit={() => {}}
        />
      )} */}
    </motion.div>
  );
};

export default DriverCard;
