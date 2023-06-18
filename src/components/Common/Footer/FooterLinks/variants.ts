import { Variants } from "framer-motion";
import { VariantNames } from "../variants";

export const listVariants: Variants = {
  [VariantNames.Initial]: {},
  [VariantNames.Animate]: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const listItemVariants: Variants = {
  [VariantNames.Initial]: {
    opacity: 0,
    y: 20,
  },
  [VariantNames.Animate]: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.1,
      type: "spring",
      damping: 20,
      stiffness: 75,
    },
  }),
};

export const linkVariants: Variants = {
  [VariantNames.Initial]: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 20,
    },
  },
  [VariantNames.Hover]: {
    y: "-100%",
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 20,
    },
  },
};
