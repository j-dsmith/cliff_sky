import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  [VariantNames.Initial]: {},
  [VariantNames.Animate]: (delay: number) => ({
    transition: {
      staggerChildren: 0.1,
      delayChildren: delay * 0.1,
    },
  }),
};

export const charVariants: Variants = {
  [VariantNames.Initial]: {
    y: "100%",
  },
  [VariantNames.Animate]: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 45,
    },
  },
};

export const variantProps = {
  containerVariants,
  charVariants,
};
