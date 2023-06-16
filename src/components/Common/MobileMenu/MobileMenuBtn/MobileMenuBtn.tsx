import { Unbounded } from "next/font/google";
import clsx from "clsx";
import { AnimationControls, motion } from "framer-motion";
import { btnTextVariants } from "./variants";
import FlyInText from "@/components/UI/FlyInText";

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
        ["text-xl", "h-4/5", "relative", "z-100"],
        unbounded.className
      )}
      onClick={handleClick}
    >
      <motion.div
        initial="initial"
        animate={controls}
        className="h-full overflow-hidden"
      >
        <FlyInText
          text="Menu"
          secondaryText="Close"
          variants={btnTextVariants}
          className="relative z-100 h-4/5 text-xl"
        />
      </motion.div>
    </button>
  );
};

export default MobileMenuBtn;
