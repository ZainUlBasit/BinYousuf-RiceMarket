import React from "react";
import ModalWrapper from "./ModalWrapper";
import { BiTrash } from "react-icons/bi";

const DeleteModal = ({ open, setOpen, onSubmit }) => {
  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="flex flex-col px-5">
        <div className="flex w-full justify-center items-center font-bold text-4xl border-b-[3px] border-b-[#0e2480] py-4 pb-6">
          <BiTrash className="text-5xl text-black" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl pt-6 pb-10">
            Are you sure want to delete this category?
          </div>
          <div className="flex gap-x-4 py-4 pb-6">
            <button
              className="border-[2px] border-[green] text-[green] font-bold hover:text-white hover:bg-[green] transition-all ease-in-out duration-500 px-3 py-2 rounded-lg w-[150px]"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="border-[2px] border-[red] text-[red] font-bold hover:text-white hover:bg-[red] transition-all ease-in-out duration-500 px-3 py-2 rounded-lg w-[150px]"
              onClick={onSubmit}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteModal;
