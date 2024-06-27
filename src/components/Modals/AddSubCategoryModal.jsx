import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { FaPlus } from "react-icons/fa";
import CustomInput from "../inputs/CustomInput";
import { CreateCategoryApi, CreateSubCategoryApi } from "../../ApiRequests";
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";
import { useDispatch } from "react-redux";
import { fetchCategory } from "../../store/Slices/CategorySlice";
import { ErrorToast } from "../ShowToast/ShowToast";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSubCategories } from "../../store/Slices/Products/SubCategorySlice";

const AddSubCategoryModal = ({ open, setOpen }) => {
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState("");
  const [SubCategoryName, setSubCategoryName] = useState("");
  const [Weight, setWeight] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", SubCategoryName);
      formData.append("weight", Weight);
      formData.append("categoryId", id);
      formData.append("subCategory_attachment", selectedFile);
      const response = await CreateSubCategoryApi(formData);
      console.log(response);
      if (response.data.success) {
        showSuccessAlert("Sub Category!", response.data.message);
        dispatch(fetchSubCategories(id));
        navigate("/subcategory/" + id);
        setOpen(false);
      } else {
        ErrorToast("Unable to add new sub-category!");
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
          <div className="text-3xl text-black">New Sub-Category</div>
        </div>
        <div className="flex flex-col justify-center items-center py-8">
          <div className="flex gap-x-4 py-4 pb-6">
            <div className="flex flex-col gap-y-4">
              <CustomInput
                label={"Sub-Category Name"}
                placeholder={"Sub-Category Name"}
                id={"sub-cat-name"}
                required={false}
                Value={SubCategoryName}
                setValue={setSubCategoryName}
              />
              <CustomInput
                label={"Weight"}
                placeholder={"Sub-Category Weight"}
                id={"weight"}
                required={false}
                Value={Weight}
                setValue={setWeight}
              />
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex items-center w-fit border-[1px] border-[#000] py-[5px] px-[20px] pl-[10px] rounded-[7.94px] text-[13.9px] text-[#000] hover:!text-white hover:bg-black transition-all ease-in-out duration-500"
                >
                  <FaPlus className="text-[1.1rem] font-bold mr-5 ml-2" />
                  Add Sub Category Picture
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

export default AddSubCategoryModal;
