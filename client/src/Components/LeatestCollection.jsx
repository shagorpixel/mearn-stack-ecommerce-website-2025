import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LeatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className=" my-10">
      <div className=" text-center py-3 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className=" text-center w-3/4 m-auto text-xs md:text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          maxime deleniti tenetur.
        </p>
      </div>
      {/* Rendering Products */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {
            latestProducts.map((product,index)=><ProductItem product={product} key={index} />)
        }
      </div>
    </div>
  );
};

export default LeatestCollection;
