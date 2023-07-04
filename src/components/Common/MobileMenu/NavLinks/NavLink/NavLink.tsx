"use client";
import FlyInText from "@/components/UI/FlyInText";
import clsx from "clsx";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import { numberVariants, textVariants } from "./variants";
import { motion } from "framer-motion";

type Props = {
  handleClick: () => void;
  pathname: string;
  order: number;
  link: {
    label: string;
    href: string;
  };
};

const NavLink = ({ link, order, handleClick, pathname }: Props) => {
  const linkClass = clsx(
    "3xs:text-5xl 2xs:text-6xl md:text-7xl uppercase tracking-[-1px] font-bold text-stone-900 self-center pl-6",
    pathname === link.href ? "font-bold" : "font-normal"
  );

  return (
    <li className="flex flex-col">
      <motion.p variants={numberVariants} className="self-start">
        0{order}
      </motion.p>
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
