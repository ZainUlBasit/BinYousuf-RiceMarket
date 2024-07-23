import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";
import { useDispatch } from "react-redux";
import { ErrorToast } from "../ShowToast/ShowToast";
import { useParams } from "react-router-dom";
import { CreateSubCategoryItemApi } from "../../ApiRequests"; // Ensure this is the correct API request function
import { fetchSubCategoryItem } from "../../store/Slices/Products/SubCategoryItemSlice";
import { BiSolidImageAdd } from "react-icons/bi";
import { RiUserForbidFill } from "react-icons/ri";
import AddingLoader from "../Loaders/AddingLoader";

const AddNewSubItemModal = ({ open, setOpen }) => {
  const [ItemName, setItemName] = useState("");
  const [ItemPrice, setItemPrice] = useState("");
  const [ItemQty, setItemQty] = useState("");
  const [ItemWeight, setItemWeight] = useState("");
  const [Loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", ItemName);
      formData.append("price", ItemPrice);
      formData.append("quantity", ItemQty);
      formData.append("weight", ItemWeight);
      formData.append("subcategoryId", id);
      formData.append("subCategoryitem_attachment", selectedFile);
      console.log(selectedFile);
      const response = await CreateSubCategoryItemApi(formData); // Ensure this is the correct API call
      console.log(response);
      if (response.data.success) {
        showSuccessAlert("Sub-Category Item Added!", response.data.message);
        dispatch(fetchSubCategoryItem(id)); // Ensure this is the correct action
        setOpen(false);
      } else {
        ErrorToast("Unable to add new sub-item!");
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
      console.log("err", err);
    }
    setLoading(false);
  };

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="flex flex-col px-8 py-4">
        <div className="flex w-full justify-center items-center font-bold text-4xl border-b-[3px] border-b-[#0e2480] py-4 pb-6">
          <div className="text-3xl text-black">New Sub-Category Item</div>
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
            </div>
          </div>
          {Loading ? (
            <div className="flex gap-x-5">
              <AddingLoader />
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

export default AddNewSubItemModal;
