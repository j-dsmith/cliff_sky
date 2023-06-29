import { Unbounded } from "next/font/google";
import clsx from "clsx";
import { AnimationControls, motion } from "framer-motion";
import { btnTextVariants } from "./variants";
import FlyInText from "@/components/UI/FlyInText";
import { VariantNames } from "@/types/VariantNames";

const unbounded = Unbounded({ subsets: ["latin"] });

type Props = {
  handleClick: () => void;
  isOpen: VariantNames;
};

const MobileMenuBtn = ({ handleClick, isOpen }: Props) => {
  return (
    <button
      role="button"
      className={clsx("relative z-100 h-4/5 text-xl", unbounded.className)}
      onClick={handleClick}
    >
      <motion.div
        initial="initial"
        animate={isOpen}
        layout
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
