import React, { useState, useEffect } from "react";
import ModalWrapper from "./ModalWrapper";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";
import { UpdateCategoryApi, UpdateSubCategoryApi } from "../../ApiRequests";
import { fetchCategory } from "../../store/Slices/CategorySlice";
import { useDispatch } from "react-redux";
import { showSuccessAlert } from "../../utils/AlertMessage";
import { ErrorToast } from "../ShowToast/ShowToast";
import { RiUserForbidFill } from "react-icons/ri";
import { BiSolidImageAdd } from "react-icons/bi";

const EditSubCatModal = ({ open, setOpen, CurrentState }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(CurrentState.attachment);
  const [CategoryName, setCategoryName] = useState(CurrentState.name);
  const [CategoryWeight, setCategoryWeight] = useState(CurrentState.weight);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(CurrentState.attachment);
    }
  }, [selectedFile, CurrentState.attachment]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", CategoryName);
      formData.append("weight", CategoryWeight);
      if (selectedFile) formData.append("subCategory_attachment", selectedFile);
      const response = await UpdateSubCategoryApi({
        id: CurrentState._id,
        payload: formData,
      });
      if (response.data.success) {
        setOpen(false);
        dispatch(fetchCategory());
        showSuccessAlert("Category!", "Category successfully edited!");
      } else {
        ErrorToast("Unable to edit category!");
      }
    } catch (err) {
      ErrorToast("Unable to edit category!");
    }
  };

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="flex flex-col px-8 py-4">
        <div className="flex w-full justify-center items-center font-bold text-4xl border-b-[3px] border-b-[#0e2480] py-4 pb-6">
          <div className="text-3xl text-black">Edit Sub Category</div>
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
                  ) : CurrentState && CurrentState.attachment ? (
                    <img
                      src={CurrentState.attachment}
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
                label={"Sub-Category Name"}
                placeholder={"Enter Sub-Category Name"}
                id={"sub-cat-name"}
                required={false}
                Value={CategoryName}
                setValue={setCategoryName}
              />
              <CustomInput
                label={"Sub-Category Name"}
                placeholder={"Enter Sub-Category Name"}
                id={"sub-cat-weight"}
                required={false}
                Value={CategoryWeight}
                setValue={setCategoryWeight}
              />
            </div>
          </div>
          <div className="flex gap-x-5">
            <button
              className="border-[2px] border-[green] text-[green] font-bold hover:text-white hover:bg-[green] transition-all ease-in-out duration-500 px-3 py-2 rounded-lg w-[150px]"
              onClick={onSubmit}
            >
              Edit
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

export default EditSubCatModal;
