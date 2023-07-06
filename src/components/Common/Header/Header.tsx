"use client";
import Image from "next/image";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "@/../public/C&S_logo_mustard.svg";
import Nav from "../Nav";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const initial = { opacity: 0, y: 20 };
  const animate = {
    opacity: 1,
    y: 0,
    transition: { delay: 3, ease: "easeOut", duration: 0.5 },
  };

  return (
    <header className="flex h-20 items-center px-4 pt-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8">
      <motion.div
        initial={pathname === "/" ? initial : undefined}
        animate={pathname === "/" ? animate : undefined}
        className="flex w-full items-baseline justify-between"
      >
        <Link href="/">
          <div className="drop-shadow-sm">
            <Image src={logo} height={40} width={40} alt="logo" priority />
          </div>
        </Link>
        <MobileMenu />
        <Nav />
      </motion.div>
    </header>
  );
};

export default Header;
