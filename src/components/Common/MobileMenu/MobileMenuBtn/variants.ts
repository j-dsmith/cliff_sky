import { Variants } from "framer-motion";

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 14,
  bounce: 0.3,
};

export const btnTextVariants: Variants = {
  open: {
    y: "-100%",
    transition,
  },
  closed: {
    y: 0,
    transition,
  },
};
