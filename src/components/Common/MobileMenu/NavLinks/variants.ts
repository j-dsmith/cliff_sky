import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const listVariants: Variants = {
  [VariantNames.Open]: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.5,
    },
  },
  [VariantNames.Closed]: {},
};

export const navVariants: Variants = {
  [VariantNames.Initial]: {
    display: "none",
  },
  [VariantNames.Open]: {
    display: "flex",
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
