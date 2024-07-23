import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { RiUserForbidFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";
import {
  ApproveOrderApi,
  CancelOrderApi,
  CreateCategoryApi,
} from "../../ApiRequests";
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../store/Slices/CategorySlice";
import { ErrorToast } from "../ShowToast/ShowToast";
import { IoIosArrowDown } from "react-icons/io";
import { Popover, Typography } from "@mui/material";
import { fetchDrivers } from "../../store/Slices/Drivers/DriversSlice";
import { fetchPendingOrders } from "../../store/Slices/Orders/PendingOrdersSlice";
import AddingLoader from "../Loaders/AddingLoader";

const DriverDetailModal = ({ open, setOpen, orderId }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [CategoryName, setCategoryName] = useState("");
  const [DriverName, setDriverName] = useState("");
  const [DriverId, setDriverId] = useState("");

  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 10); // yyyy-mm-dd
  const formattedTime = now.toTimeString().slice(0, 5); // hh:mm

  const [CurrentDate, setCurrentDate] = useState(formattedDate);
  const [CurrentTime, setCurrentTime] = useState(formattedTime);
  const [ProcessLoading, setProcessLoading] = useState(false);
  const dispatch = useDispatch();
  const DriverState = useSelector((state) => state.DriverState);

  useEffect(() => {
    dispatch(fetchDrivers());
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const onSubmit = async (e) => {
    try {
      const response = await ApproveOrderApi({
        driverId: DriverId,
        orderId: orderId,
        deliverAt: CurrentDate,
        deliveryTime: CurrentTime,
      });
      console.log(response);
      if (response.data.success) {
        showSuccessAlert("Order!", response.data.message);
        dispatch(fetchPendingOrders());
        setOpen(false);
      } else {
        ErrorToast("Unable to Approve Order!");
      }
    } catch (err) {
      ErrorToast(err.response.data.message);
      // console.log("err", err);
    }
  };

  const openId = Boolean(anchorEl);
  const id = openId ? "simple-popover" : undefined;

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="flex flex-col px-8 py-4">
        <div className="flex w-full justify-center items-center font-bold text-3xl border-b-[3px] border-b-[#0e2480] py-4 pb-6">
          <div className="text-3xl text-black">
            Driver ke liye tafseelat likhay
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-8">
          <div className="flex gap-x-4 py-4 pb-6">
            <div className="flex flex-col gap-y-4">
              <div className="relative w-[350px] maxInputWidth bg-white font-[Quicksand] flex">
                <div
                  className="px-5 py-4 border-[1.5px] border-black rounded-[7.94px] w-full outline-none InputText text-black font-bold flex justify-between"
                  onClick={handleClick}
                >
                  <div>{DriverName || "Select Driver"}</div>
                  <div>
                    <IoIosArrowDown className="text-2xl" />
                  </div>
                </div>
                <Popover
                  id={id}
                  open={openId}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  PaperProps={{
                    sx: {
                      borderRadius: "25px", // Add rounded corners
                      backgroundColor: "white", // Set background color to white
                      width: "350px", // Set the width as needed
                      overflow: "hidden", // Hide overflowing content
                      //   marginTop: "6px",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Typography
                    sx={{
                      p: 2,
                      borderColor: "#F6EAC8",
                      backgroundColor: "#F6EAC8",
                      width: "400px",
                      overflow: "hidden",
                      borderRadius: "25px",
                    }}
                  >
                    <div className="bg-[#F6EAC8] text-white font-[Quicksand]  flex flex-col justify-center items-center rounded-[50px]">
                      {DriverState.data &&
                        DriverState.data.map((dt) => {
                          return (
                            <div className="w-full flex flex-col justify-between gap-y-3 py-1 items-start">
                              <div
                                className="flex gap-x-3 items-center cursor-pointer"
                                onClick={() => {
                                  setDriverId(dt._id);
                                  setDriverName(dt.name);
                                  handleClose();
                                }}
                              >
                                <input
                                  type="checkbox"
                                  className="mr-1 appearance-none h-5 w-5 border border-black checked:bg-black rounded-full"
                                  checked={DriverId === dt._id}
                                />
                                <span className="text-black">{dt.name}</span>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </Typography>
                </Popover>
              </div>
              <CustomInput
                label={"Delivery Date"}
                placeholder={"Delivery Date"}
                id={"delivery-date"}
                required={false}
                Value={CurrentDate}
                setValue={setCurrentDate}
                Type={"date"}
              />
              <CustomInput
                label={"Delivery Time"}
                placeholder={"Delivery Time"}
                id={"delivery-time"}
                required={false}
                Value={CurrentTime}
                setValue={setCurrentTime}
                Type={"time"}
              />
              {/* <input
                type="text"
                name="cat-name"
                id="cat-name"
                className="px-3 py-3 min-w-[300px] border-[1px] border-black rounded-lg"
              /> */}
            </div>
          </div>

          {ProcessLoading ? (
            <div className=" px-2 py-2 flex gap-x-4">
              <AddingLoader />
            </div>
          ) : (
            <div className=" px-2 py-2 flex gap-x-4">
              <button
                className="w-[150px] px-3 font-bold rounded-full py-2 text-[green] hover:bg-[green] hover:text-white transition-all ease-in-out duration-500 border-[green] border-2"
                onClick={onSubmit}
              >
                Approve
              </button>
              <button
                className="w-[150px] px-3 font-bold rounded-full py-2 text-[red] hover:bg-[red] hover:text-white transition-all ease-in-out duration-500 border-[red] border-2"
                onClick={async () => {
                  setProcessLoading(true);
                  try {
                    const response = await CancelOrderApi({ orderId });
                    if (!response.data.success) {
                      ErrorToast("Unable to cancel order");
                    } else {
                      showSuccessAlert("Order", "Order Successfully Canceled!");
                      dispatch(fetchPendingOrders());
                      setOpen(false);
                    }
                  } catch (err) {
                    ErrorToast("Internal server error!");
                  }
                  setProcessLoading(false);
                }}
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

export default DriverDetailModal;
