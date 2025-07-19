import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivary_charge, getCartAmount } = useContext(ShopContext);
  return (
    <div className=" w-full">
      <div className=" text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className=" flex flex-col gap-2 mt-2 text-sm">
        <div className=" flex justify-between ">
          <p>Sub Total</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr className=" border border-gray-200" />
        <div className=" flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {getCartAmount() === 0 ? 0 :delivary_charge}.00
          </p>
        </div>
        <hr className=" border border-gray-200" />
        <div className=" flex justify-between ">
          <b>Total</b>
          <b>
            {currency} {getCartAmount() === 0 ?0 : getCartAmount() + delivary_charge}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
