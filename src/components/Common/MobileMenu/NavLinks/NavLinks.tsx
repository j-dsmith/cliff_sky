import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { navVariants, listVariants } from "./variants";

const NavLinks = () => {
  return (
    <motion.nav variants={navVariants} className="fixed inset-0 z-90 pt-40">
      <motion.ul
        variants={listVariants}
        className="flex w-full flex-col gap-10 px-4"
      >
        <NavLink text="home" />
        <NavLink text="about" />
        <NavLink text="work" />
        <NavLink text="contact" />
      </motion.ul>
    </motion.nav>
  );
};
export default NavLinks;
