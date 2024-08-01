import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { RiUserForbidFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";
import { BiSolidImageAdd } from "react-icons/bi";
import { SignUpApi } from "../../ApiRequests";
import { ErrorToast } from "../ShowToast/ShowToast";
import { showSuccessAlert } from "../../utils/AlertMessage";
import PageLoader from "../Loaders/PageLoader";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrivers } from "../../store/Slices/Drivers/DriversSlice";

const AddDriverModal = ({ open, setOpen }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [DriverName, setDriverName] = useState("");
  const [DriverCnic, setDriverCnic] = useState("");
  const [DriverMobileNo, setDriverMobileNo] = useState("");
  const [DriverVehicleNo, setDriverVehicleNo] = useState("");
  const [Loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!DriverName) {
      ErrorToast("Driver Name is required");
      setLoading(false);
      return false;
    }
    if (!DriverCnic.match(/^\d{13}$/)) {
      ErrorToast("CNIC must be 13 digits");
      setLoading(false);
      return false;
    }
    if (!DriverMobileNo.match(/^\d{11}$/)) {
      ErrorToast("Mobile No. must be 11 digits");
      setLoading(false);
      return false;
    }
    if (!DriverVehicleNo) {
      ErrorToast("Vehicle No. is required");
      setLoading(false);
      return false;
    }
    if (!selectedFile) {
      ErrorToast("Driver image is required");
      setLoading(false);
      return false;
    }
    return true;
  };

  const dispatch = useDispatch();
  // const DriverState = useSelector((state) => state.DriverState);

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("name", DriverName);
    formData.append("mobile_number", DriverMobileNo);
    formData.append("cnic", DriverCnic);
    formData.append("vehicle_number", DriverVehicleNo);
    formData.append("profile_image", selectedFile);
    formData.append("role", "2");

    try {
      const response = await SignUpApi(formData);
      if (response.data.success) {
        setOpen(false);
        dispatch(fetchDrivers());

        showSuccessAlert("Driver!", response.data.message);
      } else {
        ErrorToast(response.data.message);
      }
    } catch (err) {
      console.log(err);
      ErrorToast(err.response.data.error);
    }
    setLoading(false);
  };
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
              <div className="flex flex-col items-center">
                <div className="relative">
                  {selectedFile ? (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Driver"
                      className="w-24 h-24 rounded-full mb-4 relative"
                    />
                  ) : (
                    <RiUserForbidFill className="w-24 h-24 rounded-full mb-4 text-gray-400" />
                  )}
                  <label
                    htmlFor="file-input"
                    className="absolute bottom-0 right-0 cursor-pointer flex items-center w-fit p-1 rounded-full border-1 border-black text-white bg-black hover:bg-gray-800 transition-all ease-in-out duration-500"
                  >
                    <BiSolidImageAdd className="text-[1.1rem]" />
                  </label>
                </div>
                <input
                  id="file-input"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
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
            </div>
          </div>
          {Loading ? (
            <div className="my-5">
              <PageLoader />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddDriverModal;
