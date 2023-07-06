import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const btnVariants: Variants = {
  [VariantNames.Initial]: {},
  [VariantNames.Hover]: {},
};

export const iconContainerVariants: Variants = {
  [VariantNames.Initial]: {
    scale: 1,
  },
  [VariantNames.Hover]: {
    scale: 7,
    x: 25,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 170,
      damping: 30,
      restDelta: 0.1,
    },
  },
};

export const iconVariants: Variants = {
  [VariantNames.Initial]: {
    x: "-100%",
    y: "100%",
  },
  [VariantNames.Hover]: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.1,
      stiffness: 200,
      damping: 30,
      restDelta: 0.1,
    },
  },
};

export const labelVariants: Variants = {
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
