import { Variants } from "framer-motion";

export const textVariants: Variants = {
  initial: {
    y: "100%",
  },
  open: (delay: number) => ({
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      bounce: 0.15,
    },
  }),
  closed: {
    y: "100%",
    transition: {
      type: "spring",
      bounce: 0.3,
      stiffness: 400,
      damping: 40,
    },
  },
};
