"use client";
import { usePathname } from "next/navigation";
import MenuOverlay from "./MenuOverlay";
import { useCycle } from "framer-motion";
import MobileMenuBtn from "./MobileMenuBtn";
import { usePageHeight } from "@/hooks/usePageHeight";
import { VariantNames } from "@/types/VariantNames";

const MobileMenu = () => {
  const [isOpen, cycleIsOpen] = useCycle(
    VariantNames.Closed,
    VariantNames.Open
  );

  const pageHeight = usePageHeight();
  const pathname = usePathname();

  const handleClick = () => {
    document.body.classList.toggle("overflow-hidden");
    cycleIsOpen();
  };

  return (
    <div className="flex h-full items-baseline lg:hidden">
      <MobileMenuBtn handleClick={handleClick} isOpen={isOpen} />
      <MenuOverlay
        handleClick={handleClick}
        isOpen={isOpen}
        pageHeight={pageHeight ?? 0}
        pathname={pathname}
      />
    </div>
  );
};

export default MobileMenu;
