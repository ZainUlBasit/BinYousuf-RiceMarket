import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { ProductData } from "../../assets/Data/ProductData";
// import ProductCard from "../components/Cards/ProductCard";
import { motion } from "framer-motion";
import { FiPlusCircle } from "react-icons/fi";
// import AddCategoryModal from "../components/Modals/AddCategoryModal";
import AddBtn from "../../components/buttons/AddBtn";
import DeleteModal from "../../components/Modals/DeleteModal";
import EditCategoryModal from "../../components/Modals/EditCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCategoryApi, UpdateCategoryApi } from "../../ApiRequests";
import { showErrorAlert, showSuccessAlert } from "../../utils/AlertMessage";
import { ErrorToast } from "../../components/ShowToast/ShowToast";
import { fetchCategory } from "../../store/Slices/CategorySlice";
import { useParams } from "react-router-dom";
import AddSubCategoryModal from "../../components/Modals/AddSubCategoryModal";
import AddNewItemModal from "../../components/Modals/AddNewItemModal";

const EmptyPage = () => {
  const [SearchText, setSearchText] = useState("");
  const [OpenAddModalItem, setOpenAddModalItem] = useState(false);
  const [OpenAddModalSubCat, setOpenAddModalSubCat] = useState(false);
  const [OpenEditModal, setOpenEditModal] = useState(false);
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [SelectedId, setSelectedId] = useState("");
  const { id } = useParams();
  const containerProduct = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const DeleteCategory = async () => {
    try {
      const response = await DeleteCategoryApi(SelectedId);
      if (response.data.success) {
        setOpenDeleteModal(false);
        dispatch(fetchCategory());
        showSuccessAlert("Category!", "Category successfully deleted!");
      } else {
        ErrorToast("Unable to delete category!");
      }
    } catch (err) {
      ErrorToast("Unable to delete category!");
    }
  };

  const dispatch = useDispatch();
  const CategoryState = useSelector((state) => state.CategoryState);
  useEffect(() => {
    dispatch(fetchCategory());
    console.log(CategoryState.data);
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={CategoryState.data.find((dt) => dt._id === id)?.name}
          value={SearchText}
          setValue={setSearchText}
          BackButton={true}
        />

        <div className="flex flex-col flex-1 w-full justify-center items-center pt-5">
          <motion.div
            variants={containerProduct}
            initial={"hidden"}
            animate={"visible"}
            className="px-2 w-full flex-1 flex gap-y-8 flex-wrap flex-col justify-center items-center"
          >
            <div className="text-[#4E4E4E] opacity-[20%] font-bold text-3xl">
              No Sub Category or Item Added yet
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <AddBtn
                title={"Add Sub Category"}
                onSubmit={() => {
                  setOpenAddModalItem(false);
                  setOpenAddModalSubCat(true);
                }}
              />
              <AddBtn
                title={"Add New Item"}
                onSubmit={() => {
                  setOpenAddModalItem(true);
                  setOpenAddModalSubCat(false);
                }}
              />
            </div>
          </motion.div>
          {OpenAddModalSubCat && (
            <AddSubCategoryModal
              open={OpenAddModalSubCat}
              setOpen={setOpenAddModalSubCat}
            />
          )}
          {OpenAddModalItem && (
            <AddNewItemModal
              open={OpenAddModalItem}
              setOpen={setOpenAddModalItem}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyPage;
