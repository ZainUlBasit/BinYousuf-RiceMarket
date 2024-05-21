import React, { useState } from "react";
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

const Cancelled = () => {
  const [SearchText, setSearchText] = useState("");
  const navigate = useNavigate();
  return (
    <HomeWrapper>
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
            className="max-w-[900px] w-full flex flex-col gap-y-2"
          >
            <CancelledAccordion
              items={[
                {
                  name: "mustafa",
                  location: "Peshawar",
                  content: [
                    {
                      name: "Sarso ka tail",
                      volume: "5kg Bottle",
                      qty: 1,
                      amount: 1700,
                      img: OilImage,
                    },
                    {
                      name: "Sarso ka tail",
                      volume: "5kg Bottle",
                      qty: 1,
                      amount: 1700,
                      img: OilImage,
                    },
                    {
                      name: "Sarso ka tail",
                      volume: "5kg Bottle",
                      qty: 1,
                      amount: 1700,
                      img: OilImage,
                    },
                  ],
                },
                {
                  name: "mustafa",

                  location: "Peshawar",
                  content: [
                    {
                      name: "Sarso ka tail",
                      volume: "5kg Bottle",
                      qty: 1,
                      amount: 1700,
                      img: OilImage,
                    },
                    {
                      name: "Sarso ka tail",
                      volume: "5kg Bottle",
                      qty: 1,
                      amount: 1700,
                      img: OilImage,
                    },
                    {
                      name: "Sarso ka tail",
                      volume: "5kg Bottle",
                      qty: 1,
                      amount: 1700,
                      img: OilImage,
                    },
                  ],
                },
                {
                  name: "mustafa",

                  location: "Peshawar",
                  content: [
                    {
                      name: "Sarso ka tail",
                      volume: "5kg Bottle",
                      qty: 1,
                      amount: 1700,
                      img: OilImage,
                    },
                    {
                      name: "Sarso ka tail",
                      volume: "5kg Bottle",
                      qty: 1,
                      amount: 1700,
                      img: OilImage,
                    },
                    {
                      name: "Sarso ka tail",
                      volume: "5kg Bottle",
                      qty: 1,
                      amount: 1700,
                      img: OilImage,
                    },
                  ],
                },
              ]}
            />
          </motion.div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Cancelled;
