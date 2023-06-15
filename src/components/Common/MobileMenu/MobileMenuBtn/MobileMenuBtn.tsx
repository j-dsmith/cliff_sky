import { Unbounded } from "next/font/google";
import clsx from "clsx";
import { AnimationControls, motion } from "framer-motion";
import { btnTextVariants } from "./variants";

// Google Font
const unbounded = Unbounded({ subsets: ["latin"] });

type Props = {
  handleClick: () => void;
  controls: AnimationControls;
};

const MobileMenuBtn = ({ handleClick, controls }: Props) => {
  return (
    <button
      role="button"
      className={clsx(
        ["text-xl", "h-4/5", "relative", "z-50"],
        unbounded.className
      )}
      onClick={handleClick}
    >
      <div className="h-full overflow-hidden">
        <motion.p
          className="relative"
          variants={btnTextVariants}
          animate={controls}
          initial="initial"
        >
          Menu
          <motion.span className="absolute -bottom-full left-0">
            Close
          </motion.span>
        </motion.p>
      </div>
    </button>
  );
};

export default MobileMenuBtn;
