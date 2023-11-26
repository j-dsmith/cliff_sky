"use client";
import { motion, useAnimationControls } from "framer-motion";
import { FC, useEffect } from "react";
import { slideoutVariants } from "./variants";
import useMiniCartStore from "@/stores/useMiniCartStore";
import { useShoppingCart } from "use-shopping-cart";
import MiniCartList from "../MiniCartList";

interface MiniCartProps {}

const MiniCart: FC<MiniCartProps> = ({}) => {
  const controls = useAnimationControls();
  const { isOpen, toggleOpen } = useMiniCartStore((state) => state);

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
      className="fixed bottom-1 right-1 top-1 flex w-[33vw] flex-col items-center rounded-2xl border border-stone-300 bg-white shadow-md"
    >
      <h4 className="py-8 text-2xl font-semibold">Your Cart</h4>
      <MiniCartList />
    </motion.div>
  );
};

export default MiniCart;
