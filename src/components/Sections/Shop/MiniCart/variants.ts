import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const slideoutVariants: Variants = {
  [VariantNames.Initial]: {
    x: "100%",
  },
  [VariantNames.Open]: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  [VariantNames.Closed]: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
