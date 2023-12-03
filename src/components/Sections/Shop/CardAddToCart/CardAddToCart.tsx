"use client";
import Spacer from "@/components/UI/Spacer/Spacer";
import clsx from "clsx";
import { FC, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "@/../sanity/lib/queries/product";
import useMiniCartStore from "@/stores/useMiniCartStore";
import { urlForImage } from "@/../sanity/lib/image";

interface CartAddToCartProps {
  product: Product;
}

const CartAddToCart: FC<CartAddToCartProps> = ({ product }) => {
  const { sizes, images, title, price, _id: id } = product;
  const [selectedSize, setSelectedSize] = useState<string | null>(sizes[0]);
  const { isOpen, setIsOpen } = useMiniCartStore((state) => state);

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  const { addItem } = useShoppingCart();

  const handleAddToCart = () => {
    addItem({
      name: title,
      price: price,
      sku: `${selectedSize}-${id}`,
      currency: "USD",
      image: urlForImage(images[0].asset).url(),
      size: selectedSize,
    });

    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const renderSizeOptions = () => {
    return sizes.map((size) => {
      return (
        <li
          key={size}
          className={clsx(
            "flex-1 basis-1/5 rounded-xl border py-1 hover:bg-black hover:font-semibold hover:text-white",
            selectedSize?.toUpperCase() === size?.toUpperCase() &&
              "bg-black font-semibold text-white"
          )}
        >
          <button
            className="h-full w-full px-1.5 py-1 uppercase"
            onClick={() => handleSelectSize(size)}
          >
            {size}
          </button>
        </li>
      );
    });
  };
  return (
    <div className="">
      <ul className="flex w-full flex-nowrap gap-2">{renderSizeOptions()}</ul>
      <Spacer height="h-6" />
      <button
        onClick={handleAddToCart}
        className="w-full rounded-xl bg-black py-3 text-lg font-semibold text-white transition-colors duration-100 hover:bg-gray-800"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CartAddToCart;
