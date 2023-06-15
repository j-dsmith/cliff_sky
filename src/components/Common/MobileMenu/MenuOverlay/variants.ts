import { Variants } from "framer-motion";

const CIRCLE_POSITION = "calc(100% - 20px) 51px";
export const menuOverlayVariants: Variants = {
  initial: {
    clipPath: `circle(0px at ${CIRCLE_POSITION})`,
  },
  closed: {
    clipPath: `circle(0px at ${CIRCLE_POSITION})`,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      // // onComplete: () => ({ display: "none" }),
    },
  },
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at ${CIRCLE_POSITION}`,
    transition: {
      type: "spring",
      duration: 3,
      stiffness: 15,
      restDelta: 2,
    },
  }),
};
