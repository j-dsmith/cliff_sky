import { FC } from "react";
import ShopHeader from "./ShopHeader";
import ItemsGrid from "./ItemsGrid";

interface ShopProps {}

const Shop: FC<ShopProps> = ({}) => {
  return (
    <section className="pb-20 3xs:px-2 xs:px-4 md:px-6 lg:px-8 2xl:px-16">
      <ShopHeader />
      <ItemsGrid />
    </section>
  );
};

export default Shop;
