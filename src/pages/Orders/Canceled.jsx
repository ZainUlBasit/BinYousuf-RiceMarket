import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { useNavigate } from "react-router-dom";
import CustomAccordion from "../../components/Accordions/Accordion";
import OilImage from "../../assets/images/oil.png";
import PendingAccordion from "../../components/Accordions/PendingAccordion";
import ApprovedAccordion from "../../components/Accordions/ApprovedAccordion";
import DeliveredAccordion from "../../components/Accordions/DeliveredAccordion";
import CancelledAccordion from "../../components/Accordions/CancelledAccordion";
import { containerAccordion } from "./Pending";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchCanceledOrders } from "../../store/Slices/Orders/CanceledOrdersSlice";
import PageLoader from "../../components/Loaders/PageLoader";

const Cancelled = () => {
  const [SearchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const CanceledOrderState = useSelector((state) => state.CanceledOrderState);
  useEffect(() => {
    dispatch(fetchCanceledOrders());
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Cancelled Order"}
          value={SearchText}
          setValue={setSearchText}
        />

        <div className="flex flex-col w-full justify-center items-center pt-5">
          <motion.div
            variants={containerAccordion}
            initial="hidden"
            animate="visible"
            className="flex flex-col w-full justify-center items-start pt-5"
          >
            <div className="max-w-[900px] w-full flex flex-col gap-y-2 px-2">
              {CanceledOrderState.loading ? (
                <div className="flex flex-1 justify-center items-center">
                  <PageLoader />
                </div>
              ) : (
                CanceledOrderState.data && (
                  <CancelledAccordion items={CanceledOrderState.data} />
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cancelled;
