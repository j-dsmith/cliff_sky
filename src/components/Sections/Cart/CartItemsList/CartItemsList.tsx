"use client";
import { FC } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import QuantityIncrementor from "../CartItemsTable/QuantityIncrementor";

const CartItemsList: FC = ({}) => {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart();

  if (!cartDetails) return null;

  const handleQuantityChange = (id: string, updatedValue: string): void => {
    setItemQuantity(id, Number(updatedValue));
  };

  const renderListItems = () => {
    return Object.values(cartDetails).map(
      ({ id, image, name, size, formattedValue, quantity }) => (
        <div key={id} className="flex gap-4">
          <div className="relative h-20 min-h-[80px] w-20 min-w-[80px] overflow-hidden rounded-xl border shadow-sm">
            <Image src={image || ""} fill alt="" className="object-cover" />
          </div>
          <div className="flex-1 text-xs md:text-base">
            <div className="flex justify-between">
              <p className="font-semibold 3xs:max-w-[20ch] md:max-w-[40ch]">
                {name}
              </p>
              <p>{formattedValue}</p>
            </div>
            <p className="mt-2">
              Size: <span className="uppercase">{size}</span>
            </p>
            <div className="mt-4 flex gap-2">
              <button
                className="text-gray-600 hover:animate-pulse"
                onClick={() => removeItem(id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <QuantityIncrementor
                id={id}
                quantity={quantity}
                handleQuantityChange={handleQuantityChange}
              />
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <ul className="flex-col gap-6 3xs:flex lg:hidden">{renderListItems()}</ul>
  );
};

export default CartItemsList;
