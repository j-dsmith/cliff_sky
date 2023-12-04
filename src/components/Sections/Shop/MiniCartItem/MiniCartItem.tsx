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
    <div className="grid w-full gap-4 3xs:h-[72px] 3xs:grid-cols-[72px_1fr] 3xs:px-2 md:h-24 md:grid-cols-[96px_1fr] md:px-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border shadow-sm">
        <Image src={image || ""} fill alt="" className="object-contain" />
      </div>
      <div className="flex flex-col justify-evenly gap-1 text-xs 3xs:gap-0.5">
        <div className="flex items-baseline justify-between">
          <p className="font-medium leading-tight 3xs:max-w-[16ch] 3xs:text-xs 2xs:text-sm">
            {name}
          </p>
          <p className="rounded-lg border border-cs-mustard-200 bg-cs-mustard-100 p-1 font-medium text-cs-mustard-900 3xs:text-xs 2xs:text-sm">
            {formattedPrice}
          </p>
        </div>
        <p className=" text-gray-800">
          Size: <span className="uppercase">{size}</span>
        </p>
        <div className="flex justify-between">
          <p className=" text-gray-800">
            Quantity:{" "}
            <span className="text-xs font-medium text-gray-500">x</span>
            <span className="font-medium">{quantity}</span>
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MiniCartItem;
