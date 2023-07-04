import Image from "next/image";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "@/../public/C&S_logo_mustard.svg";
import Nav from "../Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-20 items-center px-4 pt-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8">
      <div className="flex w-full items-baseline justify-between">
        <Link href="/">
          <div className="drop-shadow-sm">
            <Image src={logo} height={40} width={40} alt="logo" priority />
          </div>
        </Link>
        <MobileMenu />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
