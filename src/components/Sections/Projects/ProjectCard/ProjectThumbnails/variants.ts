import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const thumbnailVariants: Variants = {
  [VariantNames.Initial]: {
    opacity: 0,
    y: 50,
  },
  [VariantNames.Animate]: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.1,
      duration: 0.65,
      ease: "easeOut",
    },
  }),
};
