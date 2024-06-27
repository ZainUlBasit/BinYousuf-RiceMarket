import React, { useEffect, useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { motion } from "framer-motion";
import { containerAccordion } from "../Orders/Pending";
import OngoingDriverAccordion from "../../components/Accordions/OngoingDriverAccordion";
import moment from "moment";
import OilImage from "../../assets/images/oil.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchDriversPending } from "../../store/Slices/Drivers/DriversPendingSlice";

const Ongoing = () => {
  const [SearchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const DriverPendingOrderState = useSelector(
    (state) => state.DriverPendingOrderState
  );
  useEffect(() => {
    dispatch(fetchDriversPending());
    // dispatch(fetchDriverDelivered());
  }, []);
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Ongoing Orders"}
          value={SearchText}
          setValue={setSearchText}
        />
        <motion.div
          variants={containerAccordion}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full justify-center items-center pt-5"
        >
          <div className="max-w-[900px] w-full flex flex-col gap-y-2">
            {DriverPendingOrderState.data && (
              <OngoingDriverAccordion items={DriverPendingOrderState.data} />
            )}
          </div>
        </motion.div>
      </div>
    </HomeWrapper>
  );
};

export default Ongoing;
