"use client";
import Spacer from "@/components/UI/Spacer/Spacer";
import clsx from "clsx";
import { FC, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "@/../sanity/lib/queries/product";
import useMiniCartStore from "@/stores/useMiniCartStore";
import { urlForImage } from "@/../sanity/lib/image";
import { Product as StripeProduct } from "use-shopping-cart/core";

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

  const { addItem, cartDetails, clearCart } = useShoppingCart();

  const handleAddToCart = () => {
    addItem({
      name: title,
      price: price,
      sku: `$${selectedSize}-${id}`,
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
    <div className="">
      <ul className="flex w-4/5 flex-wrap gap-1">{renderSizeOptions()}</ul>
      <Spacer height="h-6" />
      <button
        onClick={handleAddToCart}
        className="w-full rounded-xl bg-black py-3 text-lg font-semibold text-white hover:bg-stone-800"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CartAddToCart;
