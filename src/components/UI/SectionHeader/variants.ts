import { Variants } from "framer-motion";

export enum VariantNames {
  Initial = "initial",
  Animate = "animate",
}

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 45,
  bounce: 0.3,
};

export const headerContainerVariants: Variants = {
  [VariantNames.Initial]: {},
  [VariantNames.Animate]: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const headerTextVariants: Variants = {
  [VariantNames.Initial]: {
    y: "100%",
    transition,
  },
  [VariantNames.Animate]: {
    y: 0,
    transition,
  },
};
