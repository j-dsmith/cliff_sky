"use client";
import FlyInText from "@/components/UI/FlyInText";
import { navLinks } from "@/data/navLinks";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { linkVariants } from "./variants";
import { motion } from "framer-motion";
import { VariantNames } from "@/types/VariantNames";

const Nav = () => {
  const pathname = usePathname();

  const renderNavLinks = () => {
    return navLinks.map((link) => (
      <motion.li
        key={link.label}
        initial={VariantNames.Initial}
        whileHover={VariantNames.Hover}
      >
        <Link
          className={clsx(
            "uppercase",
            pathname === link.href ? "font-bold" : "font-normal text-gray-600"
          )}
          href={link.href}
        >
          {pathname === link.href ? (
            <span>{link.label}</span>
          ) : (
            <FlyInText
              variants={linkVariants}
              text={link.label}
              secondaryText={link.label}
              secondaryClassName="font-bold"
            />
          )}
        </Link>
      </motion.li>
    ));
  };
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-baseline gap-4">{renderNavLinks()}</ul>
    </nav>
  );
};
export default Nav;
