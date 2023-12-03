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

  return (
    <div className="4xl:grid-cols-5 grid gap-x-6 3xs:grid-cols-1 3xs:gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {renderProducts()}
    </div>
  );
};

export default ItemsGrid;
