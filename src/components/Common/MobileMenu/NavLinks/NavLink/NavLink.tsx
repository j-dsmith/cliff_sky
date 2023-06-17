import FlyInText from "@/components/UI/FlyInText";
import clsx from "clsx";
import { Unbounded } from "next/font/google";
import Link from "next/link";
import { textVariants } from "./variants";

const unbounded = Unbounded({ subsets: ["latin"], weight: "300" });

type Props = {
  text: string;
  custom?: number;
};

const linkClass = clsx(
  ["text-6xl", "font-semibold", "capitalize"],
  unbounded.className
);

const NavLink = ({ text, custom }: Props) => {
  return (
    <li>
      <Link href="#">
        <FlyInText variants={textVariants} className={linkClass} text={text} />
      </Link>
    </li>
  );
};
export default NavLink;
