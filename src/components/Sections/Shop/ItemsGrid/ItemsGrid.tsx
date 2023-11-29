import { FC } from "react";
import ProductCard from "../ProductCard";
import { getProducts } from "@/../sanity/lib/queries/product";

interface ItemsGridProps {}

const ItemsGrid: FC<ItemsGridProps> = async ({}) => {
  const products = await getProducts();

  if (!products) return null;

  const renderProducts = () => {
    return products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  };

  return <div className="grid grid-cols-4 gap-x-6">{renderProducts()}</div>;
};

export default ItemsGrid;
