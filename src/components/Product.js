import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product = ({ id, title, category, image, price, description }) => {
  const dispatch = useDispatch();
  const addItemsToBasket = ()=>{
    const product = {
      id, title, category, image, price, description,rating,hasPrime
    }
    dispatch(addToBasket(product))
  }
  const MIN_RATING = 5;
  const MAX_RATING = 1;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col sm:m-3 m-5 bg-white z-30 sm:p-8 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3 ">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="my-2 text-sm line-clamp-2">{description}</p>
      <div className="mb-5">
      ₹ {price}
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="h-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={addItemsToBasket} className="mt-auto md:text-sm button focus:outline-none focus:ring-2 focus:ring-yellow-400 active:from-yellow-400 border-yellow-300">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
