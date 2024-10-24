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
import PageLoader from "../../components/Loaders/PageLoader";
import { DeleteDriversApi } from "../../ApiRequests";
import { showErrorAlert } from "../../utils/AlertMessage";
import { ErrorToast } from "../../components/ShowToast/ShowToast";

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
    <>
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
            className="w-full flex gap-y-8 flex-wrap gap-x-8 justify-start px-2"
          >
            {DriverState.loading ? (
              <PageLoader />
            ) : (
              DriverState.data &&
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
              })
            )}
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
          onSubmit={async () => {
            try {
              const response = await DeleteDriversApi(SelectedId);
              if (response.data.success) {
                setOpenDeleteModal(false);
                dispatch(fetchDrivers());
                showErrorAlert("Driver!", response.data.message);
              } else {
                ErrorToast(response.data.message);
              }
            } catch (err) {
              console.log(err);
              ErrorToast(err.response.data.error);
            }
          }}
          Text={"Are you sure want to delete this Driver?"}
        />
      )}
    </>
  );
};

export default DriverList;
