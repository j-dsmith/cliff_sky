import { FC } from "react";
import Image from "next/image";
import shopSrc from "@/../public/images/shop_banner_main.jpg";
import { Poppins, Unbounded } from "next/font/google";
import clsx from "clsx";
import Filters from "../Filters/Filters";

interface ShopHeaderProps {}

// const unbounded = Poppins({ subsets: ["latin"], weight: ["500"] });

const ShopHeader: FC<ShopHeaderProps> = ({}) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-16 px-6 pb-16 pt-20">
      <div className="flex">
        <h2 className={clsx("max-w-[80%] text-6xl font-semibold")}>
          Cliff & Sky Shop. A collection of art and design projects.
        </h2>
      </div>
      <Filters />
      {/* <div className="flex items-center justify-center">
    
      </div> */}
    </div>
  );
};

export default ShopHeader;
