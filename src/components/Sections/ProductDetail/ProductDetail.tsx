"use client";
import { FC, useState } from "react";
import { Product, ProductImage } from "@/../sanity/lib/queries/product";
import ProductImages from "./ProductImages";
import Spacer from "@/components/UI/Spacer/Spacer";
import { PortableText } from "@portabletext/react";
import { useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "@/utils/createUrl";
import { cn } from "@/utils/utils";

type ProductDetailProps = {
  product: Product;
};

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!product) return null;

  const { title, price, sizes, description } = product;
  const formattedPrice = (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleSizeChange = (size: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.set("size", size);

    router.replace(createUrl(`/products/${product._id}/`, newParams), {
      scroll: false,
    });
  };

  const renderSizeOptions = () => {
    return sizes.map((size) => {
      return (
        <dd key={size}>
          <button
            onClick={() => handleSizeChange(size)}
            className={cn(
              "h-full w-full cursor-pointer rounded-xl border px-3 py-2 uppercase hover:border-black hover:bg-black hover:font-semibold hover:text-white",
              searchParams.get("size") &&
                searchParams.get("size") === size &&
                "border-black bg-black font-semibold text-white"
            )}
          >
            {size}
          </button>
        </dd>
      );
    });
  };

  return (
    <div className="flex flex-1 gap-16">
      <ProductImages product={product} />
      <div className="flex flex-1 flex-col overflow-scroll">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <Spacer height="h-4" />
        <p className="text-3xl">{formattedPrice}</p>
        <Spacer height="h-4" />
        <p className="text-sm text-gray-600">
          Shipping calculated at checkout.
        </p>
        <Spacer height="h-6" />
        <div className="">
          <PortableText value={description} />
        </div>
        <dl className="flex flex-1 flex-col gap-4">
          <Spacer height="h-4" className="border-b" />
          <dt className="font-medium">Size</dt>
          <div className="flex gap-2">{renderSizeOptions()}</div>
          <button
            // onClick={handleAddToCart}
            className="mt-auto w-3/4 rounded-xl bg-black py-3 text-lg font-semibold text-white hover:bg-gray-800"
          >
            Add To Cart
          </button>
        </dl>
      </div>
    </div>
  );
};

export default ProductDetail;
