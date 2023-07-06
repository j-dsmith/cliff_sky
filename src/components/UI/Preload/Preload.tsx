"use client";
import { motion } from "framer-motion";
import { columnVariants, containerVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";

const Preload = () => {
  return (
    <motion.div
      initial={VariantNames.Initial}
      animate={VariantNames.Animate}
      variants={containerVariants}
      className="fixed inset-0 z-500 grid grid-cols-4"
    >
      {new Array(4).fill(0).map((_, idx) => (
        <motion.div
          key={idx}
          variants={columnVariants}
          className=" bg-cs-mustard"
        />
      ))}
    </motion.div>
  );
};
export default Preload;
