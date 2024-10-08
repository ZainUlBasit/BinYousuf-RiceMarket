import React, { useState } from "react";
import HomeWrapper from "../../components/Wrapper/HomeWrapper";
import HeaderRequests from "../../components/Headers/HeaderRequests";
import { useNavigate } from "react-router-dom";
import CustomAccordion from "../../components/Accordions/Accordion";
import OilImage from "../../assets/images/oil.png";

const Previous = () => {
  const [SearchText, setSearchText] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Previous Order"}
          value={SearchText}
          setValue={setSearchText}
        />

        <div className="flex flex-col w-full justify-center items-center pt-5">
          <div className="max-w-[900px] w-full flex flex-col gap-y-2">
            <CustomAccordion
              items={[
                {
                  order_no: 123456,
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
                  order_no: 123456,
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
                  order_no: 123456,
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previous;
