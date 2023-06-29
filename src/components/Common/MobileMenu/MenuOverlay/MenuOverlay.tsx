import Image from "next/image";
import { AnimationControls, motion } from "framer-motion";
import { menuOverlayVariants } from "./variants";
import NavLinks from "../NavLinks";
import logo from "@/../public/C&S_logo_black.svg";
import Spacer from "@/components/UI/Spacer/Spacer";
import { VariantNames } from "@/types/VariantNames";

type Props = {
  isOpen: VariantNames;
  handleClick: () => void;
  pageHeight: number;
  pathname: string;
};

const MenuOverlay = ({ isOpen, pageHeight, handleClick, pathname }: Props) => {
  return (
    <>
      <div className="">
        <span className="h-min text-6xl text-cs-mustard">.</span>
      </div>
      <motion.div
        className="absolute bottom-0 right-0 top-0 z-90 w-full bg-cs-mustard px-4 md:px-6"
        variants={menuOverlayVariants}
        animate={isOpen}
        layout
        custom={pageHeight}
        initial="initial"
      >
        <Spacer height="h-6" />
        <div className="flex h-[calc(80px-24px)] w-full items-center">
          <div className="mt-1 drop-shadow">
            <Image src={logo} height={40} width={40} alt="logo" />
          </div>
        </div>
        <NavLinks handleClick={handleClick} pathname={pathname} />
      </motion.div>
    </>
  );
};
export default MenuOverlay;
