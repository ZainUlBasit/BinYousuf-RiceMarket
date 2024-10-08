import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import AddBtn from "../../components/buttons/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../store/Slices/CategorySlice";
import { useParams } from "react-router-dom";
import { fetchSubCategories } from "../../store/Slices/Products/SubCategorySlice";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import AddSubCategoryModal from "../../components/Modals/AddSubCategoryModal";
import { fetchCategoryItem } from "../../store/Slices/Products/CategoryItemSlice";
import CategoryItemCard from "../../components/Cards/CategoryItemCard";
import AddNewItemModal from "../../components/Modals/AddNewItemModal";
import EditItemModal from "../../components/Modals/EditItemModal";
import PageLoader from "../../components/Loaders/PageLoader";

const CategoryItem = () => {
  const productItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const productItemImg = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const productItemBtnLeft = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const productItemBtnRight = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const { id } = useParams();
  const [SearchText, setSearchText] = useState("");
  const [OpenAddModalItem, setOpenAddModalItem] = useState(false);
  const dispatch = useDispatch();
  const [OpenEditModal, setOpenEditModal] = useState(false);
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [Selected, setSelected] = useState("");
  const CategoryState = useSelector((state) => state.CategoryState);
  const CategoryItemState = useSelector((state) => state.CategoryItemState);
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchCategoryItem(id));
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
        <div className="flex w-full justify-end items-center pt-5">
          <div>
            <AddBtn
              title={"Add New Item"}
              onSubmit={() => {
                setOpenAddModalItem(true);
              }}
            />
          </div>
        </div>
        {CategoryItemState.loading ? (
          <div className="flex flex-1 justify-center items-center">
            <PageLoader />
          </div>
        ) : (
          CategoryItemState.data &&
          CategoryItemState.data.map((dt, i) => {
            return (
              <CategoryItemCard data={dt} key={i}>
                <div className="flex justify-center items-center h-full">
                  <div className="font-bold mx-2">Rs {dt.price}</div>
                  <div className="w-[200px] mr-[5px]">
                    <div className="flex w-full border-[#F8C21F] border-[2px] rounded-[10px]">
                      <motion.div
                        variants={productItemBtnLeft}
                        className="flex py-3 w-full h-full items-center justify-center border-r-[#F8C21F] border-r-[1px] hover:bg-[#F8C21F] cursor-pointer hover:text-[green]"
                        onClick={() => {
                          setSelected(dt);
                          setOpenEditModal(true);
                        }}
                      >
                        <FaEdit />
                      </motion.div>
                      <motion.div
                        variants={productItemBtnRight}
                        className="flex py-3 w-full h-full items-center justify-center border-l-[#F8C21F] border-l-[1px] hover:bg-[#F8C21F] cursor-pointer hover:text-[red]"
                        onClick={() => {
                          //   setSelectedId(id);
                          //   setOpenDeleteModal(true);
                        }}
                      >
                        <FaTrash />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CategoryItemCard>
            );
          })
        )}

        {OpenEditModal && Selected && (
          <EditItemModal
            open={OpenEditModal}
            setOpen={setOpenEditModal}
            selectedItem={Selected}
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
  );
};

export default CategoryItem;
