import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"; // Import icons
import StoreImage from "../../assets/images/shop.png";
import { FaCheck, FaReceipt } from "react-icons/fa";
import { motion } from "framer-motion";
import RecieptModal from "../Modals/Reciept";
import { FcApproval } from "react-icons/fc";
import { accordionItem } from "./PendingAccordion";

const AccordionItem = ({ name, location, content, OrderData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [OpenReceiptModal, setOpenReceiptModal] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setOpenReceiptModal(true);
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center px-4 py-3 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] rounded-lg relative z-1 bg-white z-100">
        <div className="flex gap-x-4">
          <img
            src={StoreImage}
            className="!w-[100px] !h-[100px] rounded-[999px]"
            alt=""
          />
          <div className="flex flex-col justify-center gap-y-4">
            <div className="flex gap-x-1 items-center">
              <div className="text-[#999FA6] text-xl">Name: </div>
              <div className="text-xl">{name}</div>
            </div>
            <div className="flex gap-x-1 items-start">
              <div className="text-[#999FA6] text-xl">Location: </div>
              <div className="text-xl">{location}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-x-3">
          <div className=" px-2 py-2 flex gap-x-4 items-center">
            <div className="flex gap-x-1 text-[green] items-center text-xl font-bold">
              <div className="rounded-full bg-[green] p-1">
                <FaCheck className="text-white text-sm" />
              </div>

              <div>Delivered</div>
            </div>
            <div className=" px-2 py-2 rounded-full border-2 border-[#FFC928] text-[#FFC928] hover:text-white hover:bg-[#FFC928] cursor-pointer transition-all ease-in-out duration-500">
              <FaReceipt onClick={toggleModal} className="text-2xl" />
            </div>
          </div>
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
                <img src={cn.attachment} alt="not found" className="w-[40px]" />
                <div className="flex flex-col">
                  <div className="text-md font-bold">{cn.name}</div>
                  <div className="text-sm">{`${cn.weight} (${cn.quantity} items)`}</div>
                </div>
              </div>
              <div className="font-bold text-sm">
                Rs {`${Number(cn.price) * Number(cn.quantity)}`}
              </div>
            </div>
          ))}
          <div className="flex w-full justify-between items-center pt-2 px-2">
            <div className="flex flex-col">Total Items: {content.length}</div>
            <div className="font-bold text-sm">
              Total Amount:{" "}
              {content.reduce(
                (accumulator, current) =>
                  accumulator +
                  Number(current.price) * Number(current.quantity),
                0
              )}
            </div>
          </div>
        </motion.div>
      )}

      {OpenReceiptModal && (
        <RecieptModal
          open={OpenReceiptModal}
          setOpen={setOpenReceiptModal}
          OrderData={OrderData}
        />
      )}
    </div>
  );
};

const DeliveredAccordion = ({ items }) => {
  return (
    <motion.div
      variants={accordionItem}
      className="w-full flex flex-col gap-y-3 mx-1"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          name={item.shop_name || "not specified"}
          location={item.address || "not specified"}
          content={item.items}
          OrderData={item}
        />
      ))}
    </motion.div>
  );
};

export default DeliveredAccordion;
