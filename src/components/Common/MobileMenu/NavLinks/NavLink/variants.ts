import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const textVariants: Variants = {
  [VariantNames.Initial]: {
    y: "100%",
  },
  [VariantNames.Open]: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  [VariantNames.Closed]: {
    y: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const numberVariants: Variants = {
  [VariantNames.Initial]: {
    opacity: 0,
    y: 20,
  },
  [VariantNames.Open]: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  [VariantNames.Closed]: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};
