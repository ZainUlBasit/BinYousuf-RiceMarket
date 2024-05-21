import React, { useState } from "react";
import HomeWrapper from "../components/Wrapper/HomeWrapper";
import HeaderRequests from "../components/Headers/HeaderRequests";
import { ProductData } from "../assets/Data/ProductData";
import ProductCard from "../components/Cards/ProductCard";

const Products = () => {
  const [SearchText, setSearchText] = useState("");
  return (
    <HomeWrapper>
      <div className="flex flex-col w-full py-10 h-screen overflow-scroll">
        <HeaderRequests
          title={"Products Order"}
          value={SearchText}
          setValue={setSearchText}
        />
        <div className="flex flex-col w-full justify-center items-center pt-5">
          <div className="max-w-[900px] w-full flex gap-y-8 flex-wrap gap-x-8">
            {ProductData.map((pd) => {
              return <ProductCard title={pd.name} imgSrc={pd.img} />;
            })}
          </div>
        </div>
      </div>
      ;
    </HomeWrapper>
  );
};

export default Products;
