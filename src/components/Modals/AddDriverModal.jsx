import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { RiUserForbidFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";

const AddDriverModal = ({ open, setOpen }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [DriverName, setDriverName] = useState("");
  const [DriverCnic, setDriverCnic] = useState("");
  const [DriverMobileNo, setDriverMobileNo] = useState("");
  const [DriverVehicleNo, setDriverVehicleNo] = useState("");
  const onSubmit = (e) => {};
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="flex flex-col px-8 py-4">
        <div className="flex w-full justify-center items-center font-bold text-4xl border-b-[3px] border-b-[#0e2480] py-4 pb-6">
          <div className="text-3xl text-black">Add New Driver</div>
        </div>
        <div className="flex flex-col justify-center items-center py-8">
          <div className="flex gap-x-4 py-4 pb-6">
            <div className="flex flex-col gap-y-4">
              <CustomInput
                label={"Driver Name"}
                placeholder={"Enter Driver Name"}
                id={"driver-name"}
                required={false}
                Value={DriverName}
                setValue={setDriverName}
              />
              <CustomInput
                label={"Cnic"}
                placeholder={"Enter Cnic"}
                id={"driver-cnic"}
                required={false}
                Value={DriverCnic}
                setValue={setDriverCnic}
              />
              <CustomInput
                label={"Mobile No."}
                placeholder={"Enter Mobile No."}
                id={"driver-contact"}
                required={false}
                Value={DriverMobileNo}
                setValue={setDriverMobileNo}
              />
              <CustomInput
                label={"Vehicle No."}
                placeholder={"Enter Vehicle No."}
                id={"driver-vehicle"}
                required={false}
                Value={DriverVehicleNo}
                setValue={setDriverVehicleNo}
              />
              {/* <input
                type="text"
                name="cat-name"
                id="cat-name"
                className="px-3 py-3 min-w-[300px] border-[1px] border-black rounded-lg"
              /> */}
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex items-center w-fit border-[1px] border-[#000] py-[5px] px-[20px] pl-[10px] rounded-[7.94px] text-[13.9px] text-[#000] hover:!text-white hover:bg-black transition-all ease-in-out duration-500"
                >
                  <FaPlus className="text-[1.1rem] font-bold mr-5 ml-2" />
                  Add Picture
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <div className="ml-3">
                    <p>Selected File: {selectedFile.name}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-x-5">
            <button
              className="border-[2px] border-[green] text-[green] font-bold hover:text-white hover:bg-[green] transition-all ease-in-out duration-500 px-3 py-2 rounded-lg w-[150px]"
              onClick={onSubmit}
            >
              Add
            </button>
            <button
              className="border-[2px] border-[red] text-[red] font-bold hover:text-white hover:bg-[red] transition-all ease-in-out duration-500 px-3 py-2 rounded-lg w-[150px]"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddDriverModal;
