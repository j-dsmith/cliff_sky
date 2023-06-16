import Image from "next/image";
import { Unbounded } from "next/font/google";
import clsx from "clsx";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "@/../public/logo.svg";

const unbounded = Unbounded({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="flex h-20 items-center">
      <div className="flex w-full items-baseline justify-between">
        <div className={clsx([""], unbounded.className)}>
          <Image className="" src={logo} height={50} width={50} alt="logo" />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
