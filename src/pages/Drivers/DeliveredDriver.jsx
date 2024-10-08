import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { motion } from "framer-motion";
import { containerAccordion } from "../Orders/Pending";
import moment from "moment";
import OilImage from "../../assets/images/oil.png";
import DeliveredDriverAccordion from "../../components/Accordions/DeliveredDriverAccordion";
import { useDispatch, useSelector } from "react-redux";
import { fetchDriverDelivered } from "../../store/Slices/Drivers/DriversDeliveredSlice";
import PageLoader from "../../components/Loaders/PageLoader";

const DeliveredDriver = () => {
  const [SearchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const DriverDeliveredOrderState = useSelector(
    (state) => state.DriverDeliveredOrderState
  );
  useEffect(() => {
    // dispatch(fetchDriverDelivered());
    dispatch(fetchDriverDelivered());
  }, []);
  return (
    <>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Delivered Orders"}
          value={SearchText}
          setValue={setSearchText}
        />
        <motion.div
          variants={containerAccordion}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full justify-center items-start pt-5"
        >
          <div className="max-w-[900px] w-full flex flex-col gap-y-2">
            {DriverDeliveredOrderState.loading ? (
              <div className="flex flex-1 justify-center items-center">
                <PageLoader />
              </div>
            ) : (
              DriverDeliveredOrderState.data && (
                <DeliveredDriverAccordion
                  items={DriverDeliveredOrderState.data}
                />
              )
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DeliveredDriver;
