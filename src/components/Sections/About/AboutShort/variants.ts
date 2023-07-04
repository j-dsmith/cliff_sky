import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const bioContentVariants: Variants = {
  [VariantNames.Initial]: {
    opacity: 0,
    y: 20,
  },
  [VariantNames.Animate]: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};
