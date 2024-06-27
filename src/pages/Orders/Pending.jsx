import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { useNavigate } from "react-router-dom";
import CustomAccordion from "../../components/Accordions/Accordion";
import OilImage from "../../assets/images/oil.png";
import PendingAccordion from "../../components/Accordions/PendingAccordion";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchPendingOrders } from "../../store/Slices/Orders/PendingOrdersSlice";

export const containerAccordion = {
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

const Pending = () => {
  const [SearchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const PendingOrderState = useSelector((state) => state.PendingOrderState);
  useEffect(() => {
    dispatch(fetchPendingOrders());
  }, []);
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Pending Order"}
          value={SearchText}
          setValue={setSearchText}
        />

        <div className="flex flex-col w-full justify-center items-center py-5">
          <motion.div
            variants={containerAccordion}
            initial={"hidden"}
            animate={"visible"}
            className="max-w-[900px] w-full flex flex-col gap-y-2"
          >
            {PendingOrderState.data && (
              <PendingAccordion items={PendingOrderState.data} />
            )}
          </motion.div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Pending;
