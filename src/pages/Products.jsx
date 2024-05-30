import React, { useEffect, useState } from "react";
import HomeWrapper from "../components/Wrapper/HomeWrapper";
import HeaderRequests from "../components/Headers/HeaderRequests";
import { ProductData } from "../assets/Data/ProductData";
import ProductCard from "../components/Cards/ProductCard";
import { motion } from "framer-motion";
import { FiPlusCircle } from "react-icons/fi";
import AddCategoryModal from "../components/Modals/AddCategoryModal";
import AddBtn from "../components/buttons/AddBtn";
import DeleteModal from "../components/Modals/DeleteModal";
import EditCategoryModal from "../components/Modals/EditCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/Slices/CategorySlice";

const Products = () => {
  const [SearchText, setSearchText] = useState("");
  const [OpenAddModal, setOpenAddModal] = useState(false);
  const [OpenEditModal, setOpenEditModal] = useState(false);
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [SelectedId, setSelectedId] = useState("");
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

  const dispatch = useDispatch();
  const CategoryState = useSelector((state) => state.CategoryState);
  useEffect(() => {
    dispatch(fetchCategory());
    console.log(CategoryState.data);
  }, []);
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Products Order"}
          value={SearchText}
          setValue={setSearchText}
        />
        <div className="flex flex-col w-full justify-end items-end pt-5">
          <AddBtn
            title={"Add New Category"}
            onSubmit={() => setOpenAddModal(true)}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center pt-5">
          <motion.div
            variants={containerProduct}
            initial={"hidden"}
            animate={"visible"}
            className="px-2 w-full flex gap-y-8 flex-wrap gap-x-8"
          >
            {CategoryState.data &&
              CategoryState.data
                .filter((d) => {
                  if (SearchText === "") return true;
                  else
                    return d.name
                      .toLowerCase()
                      .includes(SearchText.toLowerCase());
                })
                .map((pd, i) => {
                  return (
                    <ProductCard
                      id={pd._id}
                      title={pd.name}
                      imgSrc={pd.attachment}
                      setOpenDeleteModal={setOpenDeleteModal}
                      setOpenEditModal={setOpenEditModal}
                      setSelectedId={setSelectedId}
                    />
                  );
                })}
          </motion.div>
          {OpenAddModal && (
            <AddCategoryModal
              open={OpenAddModal}
              setOpen={setOpenAddModal}
              onSubmit={() => {
                alert(added);
              }}
            />
          )}
          {OpenDeleteModal && (
            <DeleteModal
              open={OpenDeleteModal}
              setOpen={setOpenDeleteModal}
              onSubmit={() => {}}
              Text={"Are you sure want to delete this category?"}
            />
          )}

          {OpenEditModal && (
            <EditCategoryModal
              open={OpenEditModal}
              setOpen={setOpenEditModal}
              CurrentState={CategoryState.data.find(
                (dt) => dt._id === SelectedId
              )}
              onSubmit={() => {}}
            />
          )}
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Products;
