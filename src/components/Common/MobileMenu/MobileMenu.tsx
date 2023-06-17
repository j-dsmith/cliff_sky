"use client";
import MenuOverlay from "./MenuOverlay";
import MobileMenuBtn from "./MobileMenuBtn";
import { useAnimationControls, useCycle } from "framer-motion";
import { usePageHeight } from "@/hooks/usePageHeight";

export enum VariantNames {
  Open = "open",
  Closed = "closed",
  Initial = "initial",
}

const MobileMenu = () => {
  const [isOpen, cycleIsOpen] = useCycle(
    VariantNames.Open,
    VariantNames.Closed
  );

  const pageHeight = usePageHeight();
  const controls = useAnimationControls();

  const handleClick = () => {
    document.body.classList.toggle("overflow-hidden");
    controls.start(isOpen);
    cycleIsOpen();
  };

  return (
    <div className="flex h-full items-baseline">
      <MobileMenuBtn handleClick={handleClick} controls={controls} />
      <MenuOverlay controls={controls} pageHeight={pageHeight ?? 0} />
    </div>
  );
};

export default MobileMenu;
