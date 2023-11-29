"use client";
import useMiniCartStore from "@/stores/useMiniCartStore";
import { usePathname } from "next/navigation";

import { FC, useEffect } from "react";

interface CartButtonProps {}

const CartButton: FC<CartButtonProps> = ({}) => {
  const pathname = usePathname();

  const { isOpen, toggleOpen, setIsOpen } = useMiniCartStore((state) => state);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    handleRouteChange();
  }, [setIsOpen, pathname]);

  if (pathname === "/cart") return null;

  const handleClick = () => {
    toggleOpen();
  };
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 grid h-16 w-16 place-items-center rounded-full border border-cs-mustard bg-cs-mustard-light text-black shadow-xl"
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
    </button>
  );
};

export default CartButton;
