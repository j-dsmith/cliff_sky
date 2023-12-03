"use client";
import { FC } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
import { Unbounded } from "next/font/google";
import { cn } from "@/utils/utils";
import Link from "next/link";

const unbounded = Unbounded({ weight: ["500"], subsets: ["latin"] });

const CartSummary: FC = ({}) => {
  const { formattedTotalPrice, cartDetails } = useShoppingCart();

  const redirectToCheckout = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
      );

      if (!stripe) throw new Error("Stripe failed to initialize.");

      const checkoutResponse = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartDetails }),
      });

      const { sessionId } = await checkoutResponse.json();
      const stripeError = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        console.error(stripeError);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-[160px] flex-1 basis-1/5 flex-col gap-4">
      <h2
        className={cn(
          "border-b pb-4 text-4xl font-semibold",
          unbounded.className
        )}
      >
        Summary
      </h2>
      <div className="flex justify-between text-sm text-gray-700">
        <span>Subtotal</span>
        <span>{formattedTotalPrice}</span>
      </div>
      <div className="flex justify-between border-b pb-4 text-sm text-gray-700">
        <span>Shipping</span>
        <span>Calculated At Checkout</span>
      </div>

      <div className="flex items-baseline justify-between border-b pb-4 text-sm text-gray-700">
        <span className="font-semibold">Total (before shipping)</span>
        <span className="text-lg font-semibold">{formattedTotalPrice}</span>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          href="/shop"
          className="flex-1 rounded-xl border border-gray-300 bg-gray-200 py-3 text-center text-lg font-semibold text-gray-600 transition-colors duration-100 hover:border-gray-400 hover:bg-gray-300 hover:text-gray-800"
        >
          Continue Shopping
        </Link>
        <button
          onClick={redirectToCheckout}
          className=" flex-1 rounded-xl bg-black py-3 text-center text-lg font-semibold text-white transition-colors duration-100 hover:bg-gray-800"
        >
          Go To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
