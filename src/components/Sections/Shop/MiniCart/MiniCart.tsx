"use client";
import { motion, useAnimationControls } from "framer-motion";
import { FC, useEffect } from "react";
import { slideoutVariants } from "./variants";
import useMiniCartStore from "@/stores/useMiniCartStore";
import { useShoppingCart } from "use-shopping-cart";
import MiniCartList from "../MiniCartList";
import Link from "next/link";

const MiniCart: FC = ({}) => {
  const controls = useAnimationControls();
  const { totalPrice } = useShoppingCart();
  const formattedPrice =
    totalPrice &&
    (totalPrice / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  const { isOpen } = useMiniCartStore((state) => state);

  useEffect(() => {
    if (isOpen) {
      controls.start("open");
    } else {
      controls.start("initial");
    }
  }, [controls, isOpen]);

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={slideoutVariants}
      className="fixed bottom-1 right-1 top-1 flex w-[33vw] flex-col items-center rounded-2xl border border-gray-300 bg-white shadow-md"
    >
      <h4 className="py-8 text-2xl font-semibold">Your Cart</h4>
      <MiniCartList />
      <div className="w-full border px-6 py-4 shadow">
        <div className="flex justify-between pb-8">
          <p className="mb-4 text-sm text-gray-600">
            <span>Subtotal </span> <span>(excl. shipping)</span>
          </p>
          <p className="font-semibold">{formattedPrice}</p>
        </div>

        <div className="flex w-3/4 gap-8">
          <Link
            href="/cart"
            className=" flex-1 rounded-xl bg-black py-3 text-center text-lg font-semibold text-white hover:bg-gray-800"
          >
            Go To Cart
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MiniCart;
