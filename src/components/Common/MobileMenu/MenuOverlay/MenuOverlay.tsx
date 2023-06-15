import { AnimationControls, motion } from "framer-motion";
import { menuOverlayVariants } from "./variants";

type Props = {
  controls: AnimationControls;
};

const MenuOverlay = ({ controls }: Props) => {
  return (
    <>
      <div className="">
        <span className="ml-0.5 h-min text-4xl text-orange-500">.</span>
      </div>
      <motion.div
        className="absolute bottom-0 right-0 top-0 z-40 w-full bg-orange-500 p-4"
        variants={menuOverlayVariants}
        animate={controls}
        initial="initial"
      ></motion.div>
    </>
  );
};
export default MenuOverlay;
