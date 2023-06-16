import { Variants } from "framer-motion";

const CIRCLE_POSITION = "calc(100% - 23px) 59px";
export const menuOverlayVariants: Variants = {
  initial: {
    clipPath: `circle(0px at ${CIRCLE_POSITION})`,
  },
  closed: {
    clipPath: `circle(0px at ${CIRCLE_POSITION})`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: (height = 1000) => ({
    clipPath: `circle(${height + 150}px at ${CIRCLE_POSITION}`,
    transition: {
      type: "spring",
      damping: 40,
      stiffness: 175,
    },
  }),
};
