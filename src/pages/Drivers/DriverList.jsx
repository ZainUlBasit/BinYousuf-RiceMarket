import React, { useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { motion } from "framer-motion";
import AddBtn from "../../components/buttons/AddBtn";
import DriverCard from "../../components/Cards/DriverCard";
import { ProductData } from "../../assets/Data/ProductData";
import { DriverData } from "../../assets/Data/DriverData";

const DriverList = () => {
  const [SearchText, setSearchText] = useState("");
  const [OpenAddModal, setOpenAddModal] = useState(false);
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
            className="max-w-[900px] w-full flex gap-y-8 flex-wrap gap-x-8 justify-center"
          >
            {DriverData.map((pd) => {
              return <DriverCard title={pd.name} imgSrc={pd.img} />;
            })}
          </motion.div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default DriverList;
