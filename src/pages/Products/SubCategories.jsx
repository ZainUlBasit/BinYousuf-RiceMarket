import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import AddBtn from "../../components/buttons/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../store/Slices/CategorySlice";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSubCategories } from "../../store/Slices/Products/SubCategorySlice";
import SubCategoryCard from "../../components/Cards/SubCategoryCard";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import AddSubCategoryModal from "../../components/Modals/AddSubCategoryModal";
import EditSubCatModal from "../../components/Modals/EditSubCatModal";
import DeleteModal from "../../components/Modals/DeleteModal";
import { DeleteSubCategoryApi } from "../../ApiRequests";
import { showSuccessAlert } from "../../utils/AlertMessage";
import PageLoader from "../../components/Loaders/PageLoader";

const SubCategories = () => {
  const navigate = useNavigate();
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
  const [OpenEditModal, setOpenEditModal] = useState(false);
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [Selected, setSelected] = useState("");
  const [SearchText, setSearchText] = useState("");
  const [OpenAddModalSubCat, setOpenAddModalSubCat] = useState(false);
  const dispatch = useDispatch();
  const CategoryState = useSelector((state) => state.CategoryState);
  const SubCategoryState = useSelector((state) => state.SubCategoryState);
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchSubCategories(id));
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Sub Category"}
          value={SearchText}
          setValue={setSearchText}
          BackButton={true}
        />
        {CategoryState.loading || SubCategoryState.loading ? (
          <div className="flex flex-1 justify-center items-center">
            <PageLoader />
          </div>
        ) : (
          <>
            <div className="flex w-full justify-between items-center pt-5">
              <div className="font-[500] font-sans text-3xl flex items-center gap-x-4">
                {CategoryState.data.find((dt) => dt._id === id)?.name}
              </div>
              <div>
                <AddBtn
                  title={"Add Sub Category"}
                  onSubmit={() => {
                    setOpenAddModalSubCat(true);
                  }}
                />
              </div>
            </div>
            {SubCategoryState.data &&
              SubCategoryState.data.map((dt, i) => {
                return (
                  <SubCategoryCard data={dt} key={i}>
                    <div className="flex justify-center items-center h-full">
                      <div className="w-[300px] mr-[5px]">
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
                      <MdOutlineArrowForwardIos
                        className="text-2xl cursor-pointer"
                        onClick={() => {
                          navigate("/subcategoryitems/" + dt._id);
                        }}
                      />
                    </div>
                  </SubCategoryCard>
                );
              })}
          </>
        )}
        {OpenEditModal && (
          <EditSubCatModal
            open={OpenEditModal}
            setOpen={setOpenEditModal}
            CurrentState={SubCategoryState.data.find(
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
                const response = await DeleteSubCategoryApi(Selected._id);
                if (response.data.success) {
                  setOpenDeleteModal(false);
                  dispatch(fetchSubCategories(id));
                  showSuccessAlert(
                    "Sub-Category!",
                    "Sub-Category successfully Deleted!"
                  );
                } else {
                  ErrorToast("Unable to delete sub-category!");
                }
              } catch (err) {
                ErrorToast("Unable to delete sub-category!");
              }
            }}
            Text={"Are you sure want to delete this sub-category?"}
          />
        )}
        {OpenAddModalSubCat && (
          <AddSubCategoryModal
            open={OpenAddModalSubCat}
            setOpen={setOpenAddModalSubCat}
          />
        )}
      </div>
    </div>
  );
};

export default SubCategories;
