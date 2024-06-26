import React, { useState, useEffect } from "react";
import ModalWrapper from "./ModalWrapper";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";
import { UpdateCategoryApi } from "../../ApiRequests";
import { fetchCategory } from "../../store/Slices/CategorySlice";
import { useDispatch } from "react-redux";
import { showSuccessAlert } from "../../utils/AlertMessage";
import { ErrorToast } from "../ShowToast/ShowToast";

const EditCategoryModal = ({ open, setOpen, CurrentState }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(CurrentState.attachment);
  const [CategoryName, setCategoryName] = useState(CurrentState.name);
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
      if (selectedFile) formData.append("category_attachment", selectedFile);
      const response = await UpdateCategoryApi({
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
          <div className="text-3xl text-black">Edit Category</div>
        </div>
        <div className="flex flex-col justify-center items-center py-8">
          <div className="flex gap-x-4 py-4 pb-6">
            <div className="flex flex-col gap-y-4">
              <CustomInput
                label={"Category Name"}
                placeholder={"Enter Category Name"}
                id={"cat-name"}
                required={false}
                Value={CategoryName}
                setValue={setCategoryName}
              />
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex items-center w-fit border-[1px] border-[#000] py-[5px] px-[20px] pl-[10px] rounded-[7.94px] text-[13.9px] text-[#000] hover:!text-white hover:bg-black transition-all ease-in-out duration-500"
                >
                  <FaPlus className="text-[1.1rem] font-bold mr-5 ml-2" />
                  Add Category Picture
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {selectedFile ? (
                  <div className="ml-3 mt-2">
                    <p>Selected File: {selectedFile.name}</p>
                    <img
                      src={imagePreview}
                      alt="preview image"
                      className="mt-2 w-[350px] h-40 object-cover border"
                    />
                  </div>
                ) : (
                  <div
                    id="ImagePreview"
                    className="w-full flex justify-center items-center"
                  >
                    <img
                      src={imagePreview}
                      alt="preview image"
                      className="mt-2 w-[350px] h-40 object-cover border"
                    />
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

export default EditCategoryModal;
