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
import { fetchSubCategoryItem } from "../../store/Slices/Products/SubCategoryItemSlice";
import AddNewSubItemModal from "../../components/Modals/AddNewSubItemModal";
import EditSubItemModal from "../../components/Modals/EditSubItemModal";
import DeleteModal from "../../components/Modals/DeleteModal";
import { DeleteSubCategoryItemApi } from "../../ApiRequests";
import PageLoader from "../../components/Loaders/PageLoader";

const SubCategoryItem = () => {
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
  const [Selected, setSelected] = useState("");
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [OpenEditModal, setOpenEditModal] = useState(false);
  const SubCategoryItemState = useSelector(
    (state) => state.SubCategoryItemState
  );
  const SubCategoryState = useSelector((state) => state.SubCategoryState);
  useEffect(() => {
    dispatch(fetchSubCategoryItem(id));
    dispatch(fetchSubCategories());
  }, []);

  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={
            SubCategoryState.data &&
            SubCategoryState.data.find((dt) => dt._id === id)?.categoryId?.name
          }
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

        {SubCategoryItemState.loading ? (
          <div className="flex flex-1 justify-center items-center">
            <PageLoader />
          </div>
        ) : (
          SubCategoryItemState.data &&
          SubCategoryItemState.data.map((dt, i) => {
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
                          setSelected(dt);
                          setOpenDeleteModal(true);
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
          <EditSubItemModal
            open={OpenEditModal}
            setOpen={setOpenEditModal}
            currentItem={SubCategoryItemState.data.find(
              (dt) => dt._id === Selected._id
            )}
          />
        )}

        {OpenDeleteModal && Selected && (
          <DeleteModal
            open={OpenDeleteModal}
            setOpen={setOpenDeleteModal}
            onSubmit={async () => {
              try {
                const response = await DeleteSubCategoryItemApi(Selected._id);
                if (response.data.success) {
                  setOpenDeleteModal(false);
                  dispatch(fetchSubCategoryItem(id));
                  showSuccessAlert(
                    "Sub-Category Item!",
                    "Sub Category Item successfully Deleted!"
                  );
                } else {
                  ErrorToast("Unable to delete sub category item!");
                }
              } catch (err) {
                ErrorToast("Unable to delete category!");
              }
            }}
            Text={"Are you sure want to delete this sub-category item?"}
          />
        )}
        {OpenAddModalItem && (
          <AddNewSubItemModal
            open={OpenAddModalItem}
            setOpen={setOpenAddModalItem}
          />
        )}
      </div>
    </HomeWrapper>
  );
};

export default SubCategoryItem;
