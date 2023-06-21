import { AnimationControls, motion } from "framer-motion";
import { menuOverlayVariants } from "./variants";
import NavLinks from "../NavLinks";

type Props = {
  controls: AnimationControls;
  pageHeight: number;
};

const MenuOverlay = ({ controls, pageHeight }: Props) => {
  return (
    <>
      <div className="">
        <span className="h-min text-6xl text-orange-500">.</span>
      </div>
      <motion.div
        className="absolute bottom-0 right-0 top-0 z-90 w-full bg-orange-500 p-4"
        variants={menuOverlayVariants}
        animate={controls}
        layout
        custom={pageHeight}
        initial="initial"
      >
        <NavLinks />
      </motion.div>
    </>
  );
};
export default MenuOverlay;
