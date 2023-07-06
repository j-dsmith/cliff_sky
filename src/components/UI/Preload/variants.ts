import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  [VariantNames.Initial]: {},
  [VariantNames.Animate]: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.5,
    },
  },
};

export const columnVariants: Variants = {
  [VariantNames.Initial]: {
    y: 0,
  },
  [VariantNames.Animate]: {
    y: "-100%",
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
