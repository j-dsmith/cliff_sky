import React from "react";
import { Unbounded } from "next/font/google";
import clsx from "clsx";
import MobileMenu from "../MobileMenu/MobileMenu";

const unbounded = Unbounded({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="flex h-20 items-center">
      <div className="flex w-full items-baseline justify-between">
        <div className={clsx(["text-4xl"], unbounded.className)}>CF</div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
