"use client";
import FlyInText from "@/components/UI/FlyInText";
import clsx from "clsx";
import { Unbounded } from "next/font/google";
import Link from "next/link";
import { textVariants } from "./variants";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300", "500"] });

type Props = {
  handleClick: () => void;
  pathname: string;
  link: {
    label: string;
    href: string;
  };
};

const NavLink = ({ link, handleClick, pathname }: Props) => {
  const linkClass = clsx(
    "text-6xl capitalize",
    pathname === link.href ? "font-medium" : "font-light",
    unbounded.className
  );

  return (
    <li>
      <Link href={link.href} onClick={handleClick}>
        <FlyInText
          variants={textVariants}
          className={linkClass}
          text={link.label}
        />
      </Link>
    </li>
  );
};
export default NavLink;
