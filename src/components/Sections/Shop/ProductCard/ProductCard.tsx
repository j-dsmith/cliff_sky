"use client";
import { FC, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Product } from "@/../sanity/lib/queries/product";
import { urlForImage } from "@/../sanity/lib/image";
import Spacer from "@/components/UI/Spacer/Spacer";
import CardAddToCart from "../CardAddToCart";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { title, price, color, images } = product;
  const formattedPrice = (price / 100).toFixed(0);

  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-stone-50 p-2">
      <div className="relative h-[350px] overflow-hidden rounded-xl bg-blue-300 shadow-sm">
        <Image
          src={urlForImage(images[0].asset).url()}
          alt=""
          width={500}
          height={500}
          className="absolute object-cover object-center"
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

        <CardAddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
