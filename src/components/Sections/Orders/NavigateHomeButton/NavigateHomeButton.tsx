"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useShoppingCart } from "use-shopping-cart";

interface NavigateHomeButtonProps {}

const NavigateHomeButton: FC<NavigateHomeButtonProps> = ({}) => {
  const router = useRouter();
  const { clearCart } = useShoppingCart();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    clearCart();
    router.push("/");
  };
  return (
    <Link href="/" className="">
      <div
        onClick={handleClick}
        className="flex cursor-pointer items-center gap-2 rounded-xl bg-black px-4 py-3 text-lg font-semibold text-white hover:bg-gray-800"
      >
        <p>Return Home</p>
        <div className="">
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
            className="feather feather-arrow-up-right"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default NavigateHomeButton;
