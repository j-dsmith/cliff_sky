import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const imgBannerVariants: Variants = {
  [VariantNames.Initial]: {
    opacity: 0,
    y: 10,
    scale: 0.97,
  },
  [VariantNames.Animate]: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};
