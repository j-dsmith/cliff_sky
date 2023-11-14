"use client";
import { FC, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Product } from "@/../sanity/lib/queries/product";
import { urlForImage } from "../../../../../sanity/lib/image";
import Spacer from "@/components/UI/Spacer/Spacer";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { sizes, title, price, color, images } = product;
  const formattedPrice = (price / 100).toFixed(0);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const handleSelectSize = (size: string) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const renderSizeOptions = () => {
    return sizes.map((size) => {
      return (
        <li
          key={size}
          className={clsx(
            "flex-1 rounded-lg border py-1 hover:bg-black hover:font-semibold hover:text-white",
            selectedSize?.toUpperCase() === size?.toUpperCase() &&
              "bg-black font-semibold text-white"
          )}
        >
          <button
            className="h-full w-full uppercase"
            onClick={() => handleSelectSize(size)}
          >
            {size}
          </button>
        </li>
      );
    });
  };
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-stone-50 p-2">
      <div className="h-3/4 overflow-hidden rounded-xl shadow-sm">
        <Image
          src={urlForImage(images[0].asset).url()}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex justify-between gap-8 text-xl">
          <h3 className="font-bold">{title}</h3>
          <p className="text-2xl font-medium text-stone-600">
            ${formattedPrice}
          </p>
        </div>
        <Spacer height="h-1" />
        <p className="capitalize">{color}</p>
        <Spacer height="h-3" />

        <ul className="flex w-4/5 flex-wrap gap-1">{renderSizeOptions()}</ul>
        <Spacer height="h-3" />

        <button className="rounded-xl bg-black py-3 text-lg font-semibold text-white hover:bg-stone-800">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
