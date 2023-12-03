"use client";
import { usePathname } from "next/navigation";
import MenuOverlay from "./MenuOverlay";
import { useCycle } from "framer-motion";
import MobileMenuBtn from "./MobileMenuBtn";
import { usePageHeight } from "@/hooks/usePageHeight";
import { VariantNames } from "@/types/VariantNames";
import useMobileMenuStore from "@/stores/useMobileMenuStore";

const MobileMenu = () => {
  const [isOpen, cycleIsOpen] = useCycle(
    VariantNames.Closed,
    VariantNames.Open
  );

  const { toggleOpen: toggleMenuOpen } = useMobileMenuStore((state) => state);

  const pageHeight = usePageHeight();
  const pathname = usePathname();

  const handleClick = () => {
    document.body.classList.toggle("overflow-hidden");

    toggleMenuOpen();

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
