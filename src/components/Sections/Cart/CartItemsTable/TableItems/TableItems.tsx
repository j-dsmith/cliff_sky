"use client";
import { FC } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

interface TableItemsProps {}

const TableItems: FC<TableItemsProps> = ({}) => {
  const { cartDetails } = useShoppingCart();
  if (!cartDetails) return null;

  const renderTableItems = () => {
    return Object.values(cartDetails).map((item) => {
      console.log(item);
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
            <p className="mb-1 font-medium">{item.name}</p>
            <p>
              Size: <span className="uppercase">{item.size}</span>
            </p>
          </td>
          <td className="w-1/6">{item.quantity}</td>
          <td className="w-1/6 text-stone-500">{item.formattedPrice}</td>
          <td className="w-1/6 font-medium">{item.formattedValue}</td>
        </tr>
      );
    });
  };
  return <>{renderTableItems()}</>;
};

export default TableItems;
