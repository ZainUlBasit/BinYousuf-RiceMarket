import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";
// import { CreateItemApi } from "../../ApiRequests"; // Make sure this is the correct API request function
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";
import { useDispatch } from "react-redux";
// import { fetchItems } from "../../store/Slices/ItemSlice"; // Make sure this is the correct Redux slice
import { ErrorToast } from "../ShowToast/ShowToast";
import { useParams } from "react-router-dom";
import { CreateCategoryItemApi } from "../../ApiRequests";

const AddNewItemModal = ({ open, setOpen }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [ItemName, setItemName] = useState("");
  const [ItemPrice, setItemPrice] = useState("");
  const [ItemQty, setItemQty] = useState("");
  const [ItemWeight, setItemWeight] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async (e) => {
    try {
      const formData = new FormData();
      formData.append("name", ItemName);
      formData.append("price", ItemPrice);
      formData.append("quantity", ItemQty);
      formData.append("weight", ItemWeight);
      formData.append("categoryId", id);
      formData.append("categoryitem_attachment", selectedFile);
      const response = await CreateCategoryItemApi(formData); // Ensure this is the correct API call
      // const response = false;
      console.log(response);
      if (response.data.success) {
        showSuccessAlert("Item Added!", response.data.message);
        // dispatch(fetchItems()); // Ensure this is the correct action
        setOpen(false);
      } else {
        ErrorToast("Unable to add new item!");
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
      console.log("err", err);
    }
  };

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="flex flex-col px-8 py-4">
        <div className="flex w-full justify-center items-center font-bold text-4xl border-b-[3px] border-b-[#0e2480] py-4 pb-6">
          <div className="text-3xl text-black">New Item</div>
        </div>
        <div className="flex flex-col justify-center items-center py-8">
          <div className="flex gap-x-4 py-4 pb-6">
            <div className="flex flex-col gap-y-4">
              <CustomInput
                label={"Item Name"}
                placeholder={"Enter Item Name"}
                id={"item-name"}
                required={false}
                Value={ItemName}
                setValue={setItemName}
              />
              <CustomInput
                label={"Item Price"}
                placeholder={"Enter Item Price"}
                id={"item-price"}
                required={false}
                Value={ItemPrice}
                setValue={setItemPrice}
              />
              <CustomInput
                label={"Item Qty"}
                placeholder={"Enter Item Qty"}
                id={"item-Qty"}
                required={false}
                Value={ItemQty}
                setValue={setItemQty}
              />
              <CustomInput
                label={"Item Weight"}
                placeholder={"Enter Item Weight"}
                id={"item-Weight"}
                required={false}
                Value={ItemWeight}
                setValue={setItemWeight}
              />
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex items-center w-fit border-[1px] border-[#000] py-[5px] px-[20px] pl-[10px] rounded-[7.94px] text-[13.9px] text-[#000] hover:!text-white hover:bg-black transition-all ease-in-out duration-500"
                >
                  <FaPlus className="text-[1.1rem] font-bold mr-5 ml-2" />
                  Add Item Picture
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

export default AddNewItemModal;
