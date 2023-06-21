import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 14,
};

export const btnTextVariants: Variants = {
  [VariantNames.Open]: {
    y: "-100%",
    transition,
  },
  [VariantNames.Closed]: {
    y: 0,
    transition,
  },
};
