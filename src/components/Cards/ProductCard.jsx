import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductCard = ({ title, imgSrc }) => {
  return (
    <div className="flex flex-col w-[200px] h-[220px] justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-5 rounded-[10px] select-none">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <img
          src={imgSrc}
          alt="image not found"
          className="w-[100px] h-[100px]"
          style={{ objectFit: "contain" }} // Ensure image covers container
        />
        <div>{title}</div>
      </div>
      <div className="flex w-full border-[#F8C21F] border-[2px] rounded-bl-[10px] rounded-br-[10px]">
        <div className="flex py-3 w-full h-full items-center justify-center border-r-[#F8C21F] border-r-[1px] hover:bg-[#F8C21F] cursor-pointer hover:text-[green]">
          <FaEdit />
        </div>
        <div className="flex py-3 w-full h-full items-center justify-center border-l-[#F8C21F] border-l-[1px] hover:bg-[#F8C21F] cursor-pointer hover:text-[red]">
          <FaTrash />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
