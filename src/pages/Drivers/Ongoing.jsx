import React, { useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { motion } from "framer-motion";
import { containerAccordion } from "../Orders/Pending";
import OngoingDriverAccordion from "../../components/Accordions/OngoingDriverAccordion";
import moment from "moment";
import OilImage from "../../assets/images/oil.png";

const Ongoing = () => {
  const [SearchText, setSearchText] = useState("");
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
            <OngoingDriverAccordion
              items={[
                {
                  date: moment(new Date()).format("D MMMM YYYY"),
                  amount: 5100,
                  qty: 3,
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
                  date: moment(new Date()).format("D MMMM YYYY"),
                  amount: 5100,
                  qty: 3,
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
                  date: moment(new Date()).format("D MMMM YYYY"),
                  amount: 5100,
                  qty: 3,
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
          </div>
        </motion.div>
      </div>
    </HomeWrapper>
  );
};

export default Ongoing;
