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
    return navLinks.map((link, index) => {
      return (
        <NavLink
          order={index + 1}
          handleClick={handleClick}
          key={link.label}
          link={link}
          pathname={pathname}
        />
      );
    });
  };
  return (
    <motion.nav
      variants={navVariants}
      className="fixed inset-0 z-90 grid place-items-center"
    >
      <motion.ul
        variants={listVariants}
        className="mx-auto flex flex-col gap-4 px-4 md:px-6"
      >
        {renderNavLinks()}
      </motion.ul>
    </motion.nav>
  );
};
export default NavLinks;
