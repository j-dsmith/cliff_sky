import { VariantNames } from "@/types/VariantNames";
import { type Variants } from "framer-motion";

export const linkVariants: Variants = {
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
