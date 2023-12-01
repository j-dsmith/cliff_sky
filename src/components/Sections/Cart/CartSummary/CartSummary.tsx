"use client";
import Link from "next/link";
import { FC } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = ({}) => {
  const { formattedTotalPrice, cartDetails } = useShoppingCart();

  const redirectToCheckout = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
      );

      if (!stripe) throw new Error("Stripe failed to initialize.");

      console.log(cartDetails);

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
    <div className="sticky top-8 flex h-40 flex-1 basis-1/5 flex-col gap-4">
      <h2 className="border-b pb-4 text-4xl font-semibold">Summary</h2>
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
      <button
        onClick={redirectToCheckout}
        className=" flex-1 rounded-xl bg-black py-3 text-center text-lg font-semibold text-white hover:bg-gray-800"
      >
        Go To Checkout
      </button>
    </div>
  );
};

export default CartSummary;
