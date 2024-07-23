import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";
// import { CreateItemApi } from "../../ApiRequests"; // Make sure this is the correct API request function
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";
import { useDispatch } from "react-redux";
// import { fetchItems } from "../../store/Slices/ItemSlice"; // Make sure this is the correct Redux slice
import { ErrorToast } from "../ShowToast/ShowToast";
import { useNavigate, useParams } from "react-router-dom";
import { CreateCategoryItemApi } from "../../ApiRequests";
import { RiUserForbidFill } from "react-icons/ri";
import { BiSolidImageAdd } from "react-icons/bi";
import { fetchCategory } from "../../store/Slices/CategorySlice";
import { fetchCategoryItem } from "../../store/Slices/Products/CategoryItemSlice";
import PageLoader from "../Loaders/PageLoader";
import AddingLoader from "../Loaders/AddingLoader";

const AddNewItemModal = ({ open, setOpen }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [ItemName, setItemName] = useState("");
  const [ItemPrice, setItemPrice] = useState("");
  const [ItemQty, setItemQty] = useState("");
  const [ItemWeight, setItemWeight] = useState("");
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      formData.append("categoryId", id);
      formData.append("categoryitem_attachment", selectedFile);
      const response = await CreateCategoryItemApi(formData); // Ensure this is the correct API call
      // const response = false;
      console.log(response);
      if (response.data.success) {
        showSuccessAlert("Item Added!", response.data.message);
        dispatch(fetchCategory());
        dispatch(fetchCategoryItem(id));
        navigate("/categoryitems/" + id);
        setOpen(false);
      } else {
        ErrorToast("Unable to add new item!");
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
          <div className="text-3xl text-black">New Item</div>
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

export default AddNewItemModal;
