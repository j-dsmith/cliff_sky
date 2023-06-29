import { VariantNames } from "@/types/VariantNames";
import { Variants } from "framer-motion";

const CIRCLE_POSITION = "calc(100% - 22.5px) 70px";
export const menuOverlayVariants: Variants = {
  [VariantNames.Initial]: {
    clipPath: `circle(0px at ${CIRCLE_POSITION})`,
  },
  [VariantNames.Closed]: {
    clipPath: `circle(0px at ${CIRCLE_POSITION})`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  [VariantNames.Open]: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at ${CIRCLE_POSITION}`,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 40,
    },
  }),
};
