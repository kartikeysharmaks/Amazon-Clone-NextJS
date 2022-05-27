import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

const Checkout = () => {
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="lg:max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            height={250}
            width={1500}
            objectFit={"contain"}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 text-center">
              {items.length === 0
                ? "Your Shopping Basket is empty"
                : "Your Shopping Basket"}
            </h1>
            {items.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        <div >
          {items.length > 0 && (
            <div className="flex flex-col bg-white p-10 shadow-md">
              <h2 className="whitespace-nowrap">
                SubTotal({items.length} items) :{" "}
                <span className="font-bold">₹ {total}</span>
              </h2>
              <button
                disabled={session ? "false" : "true"}
                className={`mt-auto md:text-sm button focus:outline-none focus:ring-2 focus:ring-yellow-400 active:from-yellow-400 border-yellow-300 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
