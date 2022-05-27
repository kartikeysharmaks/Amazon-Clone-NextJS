import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="hidden sm:inline-flex flex-grow items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className=" flex-grow flex-shrink h-full w-6 rounded-l-md p-2 focus:outline-none"
          />
          <SearchIcon className="h-12 p-4 cursor-pointer" />
        </div>
        <div className="text-white flex items-center text-xs md:text-sm space-x-6 mx-0 sm:mx-6 whitespace-nowrap">
          <div className="hidden lg:inline">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/409/395/original/vector-illustration-of-india-flag.jpg"
              alt="indianflag"
              className="h-6"
            />
          </div>
          <div className="link" onClick={!session ? signIn : signOut}>
            <p>
              {session ? `Hello, ${session.user.name}` : "Hello, Sign in here"}
            </p>
            <p className="font-extrabold">Account & Lists</p>
          </div>
          <div className="link">
            <p>Return</p>
            <p className="font-extrabold">& Orders</p>
          </div>
          <div
            className="link relative flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 md:right-10 md:top--1h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full items-center">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold ">Basket</p>
          </div>
        </div>
      </div>
      <div className="flex items-center p-2 pl-2 sm:pl-6 space-x-3 bg-amazon_blue-light text-xs sm:text-sm text-white">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-2" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      </div>
    </header>
  );
};

export default Header;
