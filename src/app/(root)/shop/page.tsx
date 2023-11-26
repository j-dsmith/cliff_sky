import Shop from "@/components/Sections/Shop";

import { FC } from "react";
import { getProducts } from "@/../sanity/lib/queries/product";

interface ShopPageProps {}

const ShopPage: FC<ShopPageProps> = async ({}) => {
  return (
    <div className="">
      <Shop />
    </div>
  );
};

export default ShopPage;
