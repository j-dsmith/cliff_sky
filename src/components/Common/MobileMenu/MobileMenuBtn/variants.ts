import { Variants } from "framer-motion";

export const btnTextVariants: Variants = {
  open: {
    y: "-100%",
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.8,
    },
  },
  closed: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.8,
    },
  },
};
