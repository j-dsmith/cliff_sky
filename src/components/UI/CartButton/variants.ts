import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const countVariants: Variants = {
  [VariantNames.Initial]: {
    opacity: 0,
    scale: 0,
  },
  [VariantNames.Animate]: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      delay: 0.6,
    },
  },
  [VariantNames.Open]: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
  [VariantNames.Closed]: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const cartButtonVariants: Variants = {
  [VariantNames.Initial]: {
    opacity: 0,
    y: 10,
    scale: 0.5,
  },
  [VariantNames.Animate]: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 2,
    },
  },
  [VariantNames.Hidden]: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
  [VariantNames.Visible]: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};
