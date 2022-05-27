import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  rating,
  hasPrime,
  image,
}) => {
const dispatch = useDispatch();
  const addItemsToCheckout = ()=>{
    const product = {
      id, title, category, image, price, description,rating,hasPrime
    }
    dispatch(addToBasket(product))
  }
  const removeItemsFromBasket = ()=>{
    dispatch(removeFromBasket({id}))
  }
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit={"contain"} />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-sm my-2 line-clamp-3">{description}</p>
        <div className="mb-5">
        ₹ {price}
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              className="h-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-end">
        <button onClick={addItemsToCheckout} className="mt-auto md:text-sm button focus:outline-none focus:ring-2 focus:ring-yellow-400 active:from-yellow-400 border-yellow-300">
          Add to Checkout
        </button>
        <button onClick={removeItemsFromBasket} className="mt-auto md:text-sm button focus:outline-none focus:ring-2 focus:ring-yellow-400 active:from-yellow-400 border-yellow-300">
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
