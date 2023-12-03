import Shop from "@/components/Sections/Shop";
import Preload from "@/components/UI/Preload";
import { FC } from "react";

interface ShopPageProps {}

const ShopPage: FC<ShopPageProps> = async ({}) => {
  return (
    <>
      <Preload />
      <Shop />;
    </>
  );
};

export default ShopPage;
