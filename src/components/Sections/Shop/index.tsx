import { FC } from "react";
import ShopHeader from "./ShopHeader";
import ItemsGrid from "./ItemsGrid";

interface ShopProps {}

const Shop: FC<ShopProps> = ({}) => {
  return (
    <section>
      <ShopHeader />
      <ItemsGrid />
    </section>
  );
};

export default Shop;
