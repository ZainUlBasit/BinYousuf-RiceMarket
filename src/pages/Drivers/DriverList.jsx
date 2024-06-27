import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { motion } from "framer-motion";
import AddBtn from "../../components/buttons/AddBtn";
import DriverCard from "../../components/Cards/DriverCard";
import { ProductData } from "../../assets/Data/ProductData";
import { DriverData } from "../../assets/Data/DriverData";
import DeleteModal from "../../components/Modals/DeleteModal";
import AddDriverModal from "../../components/Modals/AddDriverModal";
import EditDriverModal from "../../components/Modals/EditDriverModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrivers } from "../../store/Slices/Drivers/DriversSlice";

const DriverList = () => {
  const [SearchText, setSearchText] = useState("");
  const [OpenAddModal, setOpenAddModal] = useState(false);
  const [OpenEditModal, setOpenEditModal] = useState(false);
  const [SelectedId, setSelectedId] = useState("");
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
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
  const DriverState = useSelector((state) => state.DriverState);
  useEffect(() => {
    dispatch(fetchDrivers());
  }, []);
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Drivers List"}
          value={SearchText}
          setValue={setSearchText}
        />
        <div className="flex flex-col w-full justify-end items-end pt-5">
          <AddBtn
            title={"Add New Driver"}
            onSubmit={() => setOpenAddModal(true)}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center pt-5">
          <motion.div
            variants={containerProduct}
            initial={"hidden"}
            animate={"visible"}
            className="w-full flex gap-y-8 flex-wrap gap-x-8 justify-center"
          >
            {DriverState.data &&
              DriverState.data.map((pd) => {
                return (
                  <DriverCard
                    title={pd.name}
                    imgSrc={pd.img}
                    driverData={pd}
                    setOpenDeleteModal={setOpenDeleteModal}
                    setOpenEditModal={setOpenEditModal}
                    setSelectedId={setSelectedId}
                  />
                );
              })}
          </motion.div>
        </div>
      </div>
      {OpenAddModal && (
        <AddDriverModal open={OpenAddModal} setOpen={setOpenAddModal} />
      )}
      {OpenEditModal && (
        <EditDriverModal
          open={OpenEditModal}
          setOpen={setOpenEditModal}
          driverData={DriverState.data.find((dt) => dt._id === SelectedId)}
        />
      )}
      {OpenDeleteModal && (
        <DeleteModal
          open={OpenDeleteModal}
          setOpen={setOpenDeleteModal}
          onSubmit={() => {}}
          Text={"Are you sure want to delete this Driver?"}
        />
      )}
    </HomeWrapper>
  );
};

export default DriverList;
