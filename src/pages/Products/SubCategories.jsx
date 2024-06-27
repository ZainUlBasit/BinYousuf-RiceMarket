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
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Sub Category"}
          value={SearchText}
          setValue={setSearchText}
          BackButton={true}
        />
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
                          //   setSelectedId(id);
                          //   setOpenEditModal(true);
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
        {OpenAddModalSubCat && (
          <AddSubCategoryModal
            open={OpenAddModalSubCat}
            setOpen={setOpenAddModalSubCat}
          />
        )}
      </div>
    </HomeWrapper>
  );
};

export default SubCategories;
