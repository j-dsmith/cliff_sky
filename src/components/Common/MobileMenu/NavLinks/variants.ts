import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const listVariants: Variants = {
  [VariantNames.Open]: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  [VariantNames.Closed]: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const navVariants: Variants = {
  [VariantNames.Initial]: {
    display: "none",
  },
  [VariantNames.Open]: {
    display: "block",
    transition: {
      when: "beforeChildren",
    },
  },
  [VariantNames.Closed]: {
    display: "none",
    transition: {
      delay: 0.5,
    },
  },
};
