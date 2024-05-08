import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"; // Import icons
import StoreImage from "../../assets/images/shop.png";
import { FaReceipt } from "react-icons/fa";
import { motion } from "framer-motion";

const AccordionItem = ({ order_no, location, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center px-4 py-3 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] rounded-lg relative z-1 bg-white z-100">
        <div className="flex gap-x-4">
          <div className="img">
            <img
              src={StoreImage}
              className="w-[100px] h-[100px] rounded-[999px]"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center gap-y-4">
            <div className="flex gap-x-1 items-center">
              <div className="text-[#999FA6] text-xl">Order No: </div>
              <div className="text-xl">{order_no}</div>
            </div>
            <div className="flex gap-x-1 items-center">
              <div className="text-[#999FA6] text-xl">Location: </div>
              <div className="text-xl">{location}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-x-3">
          <div className=" px-2 py-2 rounded-full border-2 border-[#FFC928] text-[#FFC928] hover:text-white hover:bg-[#FFC928] cursor-pointer transition-all ease-in-out duration-500">
            <FaReceipt className="text-2xl" />
          </div>
          <div className="text-[#878787] text-xl">19 Jun 2023</div>
          {isOpen ? (
            <AiOutlineCaretUp onClick={toggleAccordion} className="text-2xl" />
          ) : (
            <AiOutlineCaretDown
              onClick={toggleAccordion}
              className="text-2xl"
            />
          )}
        </div>
      </div>
      {isOpen && content && (
        <motion.div
          className="flex flex-col w-full justify-between items-start px-4 border-b-[1px] border-l-[1px] border-r-[1px] rounded-bl-lg rounded-br-lg pt-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-bold text-xl pb-2">Item List</div>
          {content.map((cn, index) => (
            <div
              key={index}
              className="flex w-full justify-between items-center py-2 px-2 border-b-[1px]"
            >
              <div className="flex items-center gap-x-3">
                <img src={cn.img} alt="not found" className="w-[40px]" />
                <div className="flex flex-col">
                  <div className="text-md font-bold">{cn.name}</div>
                  <div className="text-sm">{`${cn.volume} (${cn.qty} items)`}</div>
                </div>
              </div>
              <div className="font-bold text-sm"> Rs 17,000</div>
            </div>
          ))}
          <div className="flex w-full justify-between items-center pt-2 px-2">
            <div className="flex flex-col">Total Items: {content.length}</div>
            <div className="font-bold text-sm">Total Amount: Rs 51,000</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const CustomAccordion = ({ items }) => {
  return (
    <div className="w-full flex flex-col gap-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          order_no={item.order_no}
          location={item.location}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default CustomAccordion;
