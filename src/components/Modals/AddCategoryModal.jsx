import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { RiUserForbidFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";
import { CreateCategoryApi } from "../../ApiRequests";
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";
import { useDispatch } from "react-redux";
import { fetchCategory } from "../../store/Slices/CategorySlice";
import { ErrorToast } from "../ShowToast/ShowToast";
import AddingLoader from "../Loaders/AddingLoader";

const AddCategoryModal = ({ open, setOpen }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [CategoryName, setCategoryName] = useState("");
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const onSubmit = async (e) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", CategoryName);
      formData.append("category_attachment", selectedFile);
      const response = await CreateCategoryApi(formData);
      console.log(response);
      if (response.data.success) {
        showSuccessAlert("Category!", response.data.message);
        dispatch(fetchCategory());
        setOpen(false);
      } else {
        ErrorToast("Unable to add new category!");
      }
    } catch (err) {
      ErrorToast(err.response.data.message);
      // console.log("err", err);
    }
    setLoading(false);
  };

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="flex flex-col px-8 py-4">
        <div className="flex w-full justify-center items-center font-bold text-4xl border-b-[3px] border-b-[#0e2480] py-4 pb-6">
          <div className="text-3xl text-black">New Category</div>
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
                  Add Category Picture
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

export default AddCategoryModal;
