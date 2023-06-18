import { Variants } from "framer-motion";

export enum VariantNames {
  Initial = "initial",
  Animate = "animate",
}

export const bioContentVariants: Variants = {
  [VariantNames.Initial]: {
    opacity: 0,
    y: 20,
  },
  [VariantNames.Animate]: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 75,
    },
  },
};
