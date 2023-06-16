import { Variants } from "framer-motion";

export const listVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const navVariants: Variants = {
  initial: {
    display: "none",
  },
  open: {
    display: "block",
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    display: "none",
    transition: {
      delay: 0.5,
    },
  },
};
