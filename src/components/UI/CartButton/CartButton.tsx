"use client";
import useMiniCartStore from "@/stores/useMiniCartStore";
import { motion, useAnimationControls } from "framer-motion";
import { usePathname } from "next/navigation";

import { FC, useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { cartButtonVariants, countVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";
import useMobileMenuStore from "@/stores/useMobileMenuStore";

interface CartButtonProps {}

const CartButton: FC<CartButtonProps> = ({}) => {
  const pathname = usePathname();
  const controls = useAnimationControls();

  const { isOpen, toggleOpen, setIsOpen } = useMiniCartStore((state) => state);
  const { isOpen: menuOpen } = useMobileMenuStore((state) => state);
  const { cartCount } = useShoppingCart();

  /**
   * Handle animation effects
   */

  // This effect closes the mini cart when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, pathname]);

  useEffect(() => {
    if (menuOpen) {
      controls.start(VariantNames.Hidden);
    } else if (isOpen) {
      controls.start(VariantNames.Open);
    } else if (cartCount && pathname !== "/cart") {
      controls.start(VariantNames.Animate);
    } else {
      controls.start(VariantNames.Closed);
    }
  }, [isOpen, cartCount, pathname, menuOpen, controls]);

  if (pathname === "/cart" || !cartCount) return null;

  const handleClick = () => {
    toggleOpen();
  };

  return (
    <motion.button
      variants={cartButtonVariants}
      initial={VariantNames.Initial}
      animate={controls}
      onClick={handleClick}
      className="fixed bottom-4 z-cartBtn grid h-16 w-16 place-items-center rounded-full border border-cs-mustard-300 bg-cs-mustard-200 text-cs-mustard-900 drop-shadow-md 3xs:right-2 md:right-4"
    >
      {!isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart h-8 w-8"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x h-10 w-10"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      )}
      <motion.div
        variants={countVariants}
        initial={VariantNames.Initial}
        animate={controls}
        className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-black text-xs font-semibold text-white shadow-xl"
      >
        {cartCount}
      </motion.div>
    </motion.button>
  );
};

export default CartButton;
