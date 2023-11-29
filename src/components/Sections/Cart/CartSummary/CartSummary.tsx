"use client";
import Link from "next/link";
import { FC } from "react";
import { useShoppingCart } from "use-shopping-cart";

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = ({}) => {
  const { formattedTotalPrice } = useShoppingCart();
  return (
    <div className="sticky top-8 flex h-40 flex-1 basis-1/5 flex-col gap-4">
      <h2 className="border-b pb-4 text-4xl font-semibold">Summary</h2>
      <div className="flex justify-between text-sm text-stone-700">
        <span>Subtotal</span>
        <span>{formattedTotalPrice}</span>
      </div>
      <div className="flex justify-between border-b pb-4 text-sm text-stone-700">
        <span>Shipping</span>
        <span>Calculated At Checkout</span>
      </div>

      <div className="flex items-baseline justify-between border-b pb-4 text-sm text-stone-700">
        <span className="font-semibold">Total (before shipping)</span>
        <span className="text-lg font-semibold">{formattedTotalPrice}</span>
      </div>
      <Link
        href="#"
        className=" flex-1 rounded-xl bg-black py-3 text-center text-lg font-semibold text-white hover:bg-stone-800"
      >
        Go To Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
