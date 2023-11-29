import { FC } from "react";
import ShopHeader from "./ShopHeader";
import ItemsGrid from "./ItemsGrid";

interface ShopProps {}

const Shop: FC<ShopProps> = ({}) => {
  return (
    <section className="px-8">
      <ShopHeader />
      <ItemsGrid />
    </section>
  );
};

export default Shop;
