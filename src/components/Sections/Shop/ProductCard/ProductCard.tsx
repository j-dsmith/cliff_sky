import { FC } from "react";
import Image from "next/image";

import { Product } from "@/../sanity/lib/queries/product";
import { urlForImage } from "@/../sanity/lib/image";
import Spacer from "@/components/UI/Spacer/Spacer";
import CardAddToCart from "../CardAddToCart";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { title, price, color, images, _id } = product;
  const formattedPrice = (price / 100).toFixed(0);

  return (
    <div className="flex flex-col gap-4">
      <Link href={`/products/${_id}`}>
        <div className="relative aspect-square w-full overflow-hidden rounded-xl border shadow-sm">
          <Image
            src={urlForImage(images[0].asset).url()}
            alt=""
            width={500}
            height={500}
            className="absolute object-cover object-center"
          />
        </div>
      </Link>
      <div className="flex flex-col p-2">
        <div className="flex items-baseline justify-between gap-8 3xs:text-lg md:text-xl">
          <Link href={`/products/${_id}`}>
            <h3 className="font-bold ">{title}</h3>
          </Link>
          <p className="rounded-xl border border-cs-mustard-300 bg-cs-mustard-200 px-2 py-1 font-medium text-cs-mustard-900">
            ${formattedPrice}
          </p>
        </div>
        <Spacer height="h-1" />
        <p className="capitalize">{color}</p>
        <Spacer height="h-4" />

        <CardAddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
