"use client";
import { ChangeEvent, FC } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import QuantityIncrementor from "../QuantityIncrementor";

interface TableItemsProps {}

const TableItems: FC<TableItemsProps> = ({}) => {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart();
  if (!cartDetails) return null;

  const handleQuantityChange = (id: string, updatedValue: string): void => {
    setItemQuantity(id, Number(updatedValue));
  };

  const renderTableItems = () => {
    return Object.values(cartDetails).map((item) => {
      return (
        <tr
          key={item.id}
          className="h-12 border-b text-sm transition-colors duration-100 hover:bg-stone-50"
        >
          <td className="w-1/6 p-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border shadow-sm">
              <Image
                src={item.image || ""}
                fill
                alt=""
                className="object-contain"
              />
            </div>
          </td>
          <td className="w-2/6 pr-4">
            <p className="mb-1 max-w-[23ch] font-medium">{item.name}</p>
            <p>
              Size: <span className="uppercase">{item.size}</span>
            </p>
          </td>
          <td className="w-1/6">
            <div className="flex gap-2">
              <button
                className="text-stone-600 hover:animate-pulse"
                onClick={() => removeItem(item.id)}
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
                id={item.id}
                quantity={item.quantity}
                handleQuantityChange={handleQuantityChange}
              />
            </div>
          </td>
          <td className="w-1/6 text-stone-500">{item.formattedPrice}</td>
          <td className="w-1/6 font-medium">{item.formattedValue}</td>
        </tr>
      );
    });
  };
  return <>{renderTableItems()}</>;
};

export default TableItems;
