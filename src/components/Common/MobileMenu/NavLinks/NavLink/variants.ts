import { Variants } from "framer-motion";
import { VariantNames } from "../../variants";

export const textVariants: Variants = {
  [VariantNames.Initial]: {
    y: "100%",
  },
  [VariantNames.Open]: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  [VariantNames.Closed]: {
    y: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
