"use client";
import { motion } from "framer-motion";
import { columnVariants, containerVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";
import { useState } from "react";
import clsx from "clsx";

const Preload = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  return (
    <motion.div
      initial={VariantNames.Initial}
      animate={VariantNames.Animate}
      variants={containerVariants}
      onAnimationComplete={() => setAnimationComplete(true)}
      className={clsx(
        "z-preload fixed inset-0 grid grid-cols-4",
        animationComplete && "hidden"
      )}
    >
      {new Array(4).fill(0).map((_, idx) => (
        <motion.div
          key={idx}
          variants={columnVariants}
          className=" bg-cs-mustard-400"
        />
      ))}
    </motion.div>
  );
};
export default Preload;
