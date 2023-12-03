import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const slideoutVariants: Variants = {
  [VariantNames.Initial]: {
    x: "105%",
  },
  [VariantNames.Open]: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  [VariantNames.Closed]: {
    x: "105%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
