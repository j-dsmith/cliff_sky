"use client";
import { motion, useAnimationControls } from "framer-motion";
import { FC, useEffect } from "react";
import { slideoutVariants } from "./variants";
import useMiniCartStore from "@/stores/useMiniCartStore";
import { useShoppingCart } from "use-shopping-cart";
import MiniCartList from "../MiniCartList";
import Link from "next/link";
import { VariantNames } from "@/types/VariantNames";

const MiniCart: FC = ({}) => {
  const controls = useAnimationControls();
  const { totalPrice, cartCount } = useShoppingCart();
  const formattedPrice =
    totalPrice &&
    (totalPrice / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  const { isOpen, setIsOpen } = useMiniCartStore((state) => state);

  useEffect(() => {
    if (isOpen) {
      controls.start(VariantNames.Open);
      document.body.classList.add("3xs:overflow-hidden", "md:overflow-auto");
      document.documentElement.classList.add(
        "3xs:overflow-hidden",
        "md:overflow-auto"
      );
    } else {
      controls.start(VariantNames.Initial);
      document.body.classList.remove("3xs:overflow-hidden", "md:overflow-auto");
      document.documentElement.classList.remove(
        "3xs:overflow-hidden",
        "md:overflow-auto"
      );
    }
  }, [controls, isOpen]);

  useEffect(() => {
    console.log(cartCount);
    if (cartCount === 0) {
      controls.start(VariantNames.Initial);
      setIsOpen(false);
    }
  }, [cartCount, controls, setIsOpen]);

  return (
    <motion.div
      initial={VariantNames.Initial}
      animate={controls}
      variants={slideoutVariants}
      className="fixed z-miniCart flex flex-col items-center rounded-2xl border border-gray-300 bg-white drop-shadow-md 3xs:inset-1 3xs:w-[calc(100%-8px)] md:inset-[unset] md:bottom-1 md:right-1 md:top-1 md:w-1/2 lg:w-[40vw] xl:w-1/3"
    >
      <h4 className="py-8 text-2xl font-semibold">Your Cart</h4>
      <MiniCartList />

      <div className="w-full py-4 3xs:px-2 md:px-4">
        <div className="flex justify-between pb-8">
          <p className="mb-4 text-sm text-gray-600">
            <span>Subtotal </span> <span>(excl. shipping)</span>
          </p>
          <p className="font-semibold">{formattedPrice}</p>
        </div>

        <div className="flex w-3/4 gap-8">
          <Link
            href="/cart"
            className="flex-1 rounded-xl bg-black py-3 text-center text-lg font-semibold text-white transition-colors duration-100 hover:bg-gray-800"
          >
            Go To Cart
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MiniCart;
