import { FC } from "react";
import Image from "next/image";
import shopSrc from "@/../public/images/shop_banner.png";
import { Unbounded } from "next/font/google";

import Filters from "../Filters/Filters";
import { cn } from "@/utils/utils";
import Spacer from "@/components/UI/Spacer/Spacer";

interface ShopHeaderProps {}

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500"] });

const ShopHeader: FC<ShopHeaderProps> = ({}) => {
  return (
    <div className="mx-auto flex flex-col items-center pt-20 md:pt-16">
      <div className="flex w-full flex-col gap-2">
        <h2
          className={cn(
            "max-w-[80%] font-semibold 3xs:text-4xl md:text-5xl",
            unbounded.className
          )}
        >
          Shop
        </h2>
        <p className="max-w-[24ch] font-medium text-gray-600 md:max-w-[32ch] md:text-lg">
          A collection of merchandise inspired by my art and design projects.
        </p>
      </div>
      <Spacer height="h-8 xs:h-6 md:h-8" />
      <div className="h-16 w-full rounded-xl bg-gradient-to-r from-cs-mustard-300 to-cs-mustard-400" />
      <Spacer height="h-8 md:h-16" />
      <Filters />
    </div>
  );
};

export default ShopHeader;
