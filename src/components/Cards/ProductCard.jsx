import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import DeleteModal from "../Modals/DeleteModal";
import EditCategoryModal from "../Modals/EditCategoryModal";

const ProductCard = ({
  title,
  imgSrc,
  setOpenDeleteModal,
  setOpenEditModal,
  id,
  setSelectedId,
}) => {
  //   const [OpenEditModal, setOpenEditModal] = useState(false);
  //   const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
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
      className="flex flex-col w-[200px] h-[220px] justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-5 rounded-[10px] select-none"
    >
      <motion.div
        variants={productItemImg}
        className="flex flex-col items-center justify-center gap-y-2"
        onClick={() => alert("yes")}
      >
        <img
          src={imgSrc}
          alt="image not found"
          className="w-[100px] h-[100px]"
          style={{ objectFit: "contain" }} // Ensure image covers container
        />
        <div>{title}</div>
      </motion.div>
      <div className="flex w-full border-[#F8C21F] border-[2px] rounded-bl-[10px] rounded-br-[10px]">
        <motion.div
          variants={productItemBtnLeft}
          className="flex py-3 w-full h-full items-center justify-center border-r-[#F8C21F] border-r-[1px] hover:bg-[#F8C21F] cursor-pointer hover:text-[green]"
          onClick={() => {
            setSelectedId(id);
            setOpenEditModal(true);
          }}
        >
          <FaEdit />
        </motion.div>
        <motion.div
          variants={productItemBtnRight}
          className="flex py-3 w-full h-full items-center justify-center border-l-[#F8C21F] border-l-[1px] hover:bg-[#F8C21F] cursor-pointer hover:text-[red]"
          onClick={() => {
            setSelectedId(id);
            setOpenDeleteModal(true);
          }}
        >
          <FaTrash />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
