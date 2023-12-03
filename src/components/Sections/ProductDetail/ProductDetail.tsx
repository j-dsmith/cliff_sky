"use client";
import { FC } from "react";
import { Product } from "@/../sanity/lib/queries/product";
import ProductImages from "./ProductImages";
import Spacer from "@/components/UI/Spacer/Spacer";
import { PortableText } from "@portabletext/react";
import { useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "@/utils/createUrl";
import { cn } from "@/utils/utils";
import { useShoppingCart } from "use-shopping-cart";
import { urlForImage } from "../../../../sanity/lib/image";
import useMiniCartStore from "@/stores/useMiniCartStore";

type ProductDetailProps = {
  product: Product;
};

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addItem } = useShoppingCart();
  const { isOpen, setIsOpen } = useMiniCartStore((state) => state);

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
        <dd key={size} className="flex-1">
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

  const handleAddToCart = () => {
    const selectedSize = searchParams.get("size");
    addItem({
      name: title,
      price: price,
      sku: `${selectedSize}-${product._id}`,
      currency: "USD",
      image: urlForImage(product.images[0].asset).url(),
      size: selectedSize,
    });

    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className="flex-1 grid-cols-1 3xs:grid 3xs:gap-y-6 md:flex md:gap-8 lg:gap-16">
      <ProductImages product={product} />
      <div className="flex flex-1 flex-col overflow-scroll">
        <h2 className="font-semibold 3xs:text-2xl">{title}</h2>
        <Spacer height="h-4" />
        <p className="text-3xl 3xs:text-xl">{formattedPrice}</p>
        <Spacer height="h-4" />
        <p className="text-sm text-gray-600">
          Shipping calculated at checkout.
        </p>
        <Spacer height="h-6" />
        <div className="">
          <PortableText value={description} />
        </div>
        <dl className="flex flex-1 flex-col gap-4">
          <Spacer height="h-8" className="border-b" />
          <Spacer height="h-4" className="" />

          <dt className="font-medium">Size</dt>
          <div className="flex flex-nowrap gap-2">{renderSizeOptions()}</div>
          <button
            onClick={handleAddToCart}
            disabled={!searchParams.get("size")}
            className={cn(
              "mt-auto rounded-xl bg-black py-3 text-lg font-semibold text-white transition-colors duration-100 3xs:w-full",
              !searchParams.get("size") && "bg-gray-200 text-gray-400",
              searchParams.get("size") && "hover:bg-gray-800"
            )}
          >
            Add To Cart
          </button>
        </dl>
      </div>
    </div>
  );
};

export default ProductDetail;
