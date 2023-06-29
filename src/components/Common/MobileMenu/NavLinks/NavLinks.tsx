import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { navVariants, listVariants } from "./variants";
import { navLinks } from "@/data/navLinks";

type Props = {
  handleClick: () => void;
  pathname: string;
};

const NavLinks = ({ handleClick, pathname }: Props) => {
  const renderNavLinks = () => {
    return navLinks.map((link) => {
      return (
        <NavLink
          handleClick={handleClick}
          key={link.label}
          link={link}
          pathname={pathname}
        />
      );
    });
  };
  return (
    <motion.nav variants={navVariants} className="fixed inset-0 z-90 pt-40">
      <motion.ul
        variants={listVariants}
        className="flex w-full flex-col gap-8 px-4"
      >
        {renderNavLinks()}
      </motion.ul>
    </motion.nav>
  );
};
export default NavLinks;
