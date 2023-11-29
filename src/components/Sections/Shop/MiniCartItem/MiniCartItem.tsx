import { FC } from "react";
import Image from "next/image";
import { CartEntry } from "use-shopping-cart/core";

type MiniCartItemProps = {
  cartItem: CartEntry;
  children: React.ReactNode;
};

const MiniCartItem: FC<MiniCartItemProps> = ({ cartItem, children }) => {
  const { name, price, quantity, image, size } = cartItem;
  const formattedPrice = (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="grid h-28 w-full grid-cols-[120px_2fr_min-content] gap-4 px-6">
      <div className="relative aspect-square w-28 overflow-hidden rounded-xl border shadow-sm">
        <Image src={image || ""} fill alt="" className="object-contain" />
      </div>
      <div className="flex flex-col justify-evenly gap-1 text-xs">
        <p className="text-sm font-medium leading-tight">{name}</p>
        <p className=" text-gray-800">
          Size: <span className="uppercase">{size}</span>
        </p>
        <p className=" text-gray-800">Quantity: {quantity}</p>
        {children}
      </div>
      <p className="text-end font-medium">{formattedPrice}</p>
    </div>
  );
};

export default MiniCartItem;
