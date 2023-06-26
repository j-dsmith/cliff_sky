import Image from "next/image";
import { Unbounded } from "next/font/google";
import clsx from "clsx";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "@/../public/C&S_logo_mustard.svg";

const unbounded = Unbounded({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="flex h-20 flex-none items-center px-4 md:px-6 md:pt-6">
      <div className="flex w-full items-center justify-between">
        <div className={clsx("drop-shadow-sm", unbounded.className)}>
          <Image src={logo} height={40} width={40} alt="logo" />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
