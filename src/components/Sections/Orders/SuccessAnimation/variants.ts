import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const checkIconVariants: Variants = {
  [VariantNames.Initial]: {
    pathLength: 0,
    opacity: 0,
  },
  [VariantNames.Animate]: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      pathLength: {
        delay: 0.2,
      },
    },
  },
};

export const circleVariants: Variants = {
  [VariantNames.Initial]: {
    scale: 0,
  },
  [VariantNames.Animate]: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
