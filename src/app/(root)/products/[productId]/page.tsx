import { FC } from "react";
import ProductDetail from "@/components/Sections/ProductDetail";
import { getOneProduct } from "../../../../../sanity/lib/queries/product";

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

const ProductDetailPage: FC<ProductDetailPageProps> = async ({
  params: { productId },
}) => {
  const product = await getOneProduct(productId);
  if (!product) return null;
  return (
    <section className="flex flex-col px-8 py-20 3xs:px-2 xs:px-4 md:px-6 lg:px-8 2xl:px-16">
      <ProductDetail product={product} />
    </section>
  );
};

export default ProductDetailPage;
