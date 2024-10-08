import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { useNavigate } from "react-router-dom";
import CustomAccordion from "../../components/Accordions/Accordion";
import OilImage from "../../assets/images/oil.png";
import PendingAccordion from "../../components/Accordions/PendingAccordion";
import ApprovedAccordion from "../../components/Accordions/ApprovedAccordion";
import { motion } from "framer-motion";
import { containerAccordion } from "./Pending";
import { useDispatch, useSelector } from "react-redux";
import { fetchApprovedOrders } from "../../store/Slices/Orders/ApprovedOrdersSlice";
import PageLoader from "../../components/Loaders/PageLoader";

const Approved = () => {
  const [SearchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ApprovedOrderState = useSelector((state) => state.ApprovedOrderState);
  useEffect(() => {
    dispatch(fetchApprovedOrders());
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Approved Order"}
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
            {ApprovedOrderState.loading ? (
              <div className="flex flex-1 justify-center items-center">
                <PageLoader />
              </div>
            ) : (
              ApprovedOrderState.data && (
                <ApprovedAccordion items={ApprovedOrderState.data} />
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Approved;
