"use client";
import { contactLinks } from "@/data/contactLinks";
import { VariantNames } from "../variants";
import { linkVariants, listItemVariants, listVariants } from "./variants";
import FlyInText from "@/components/UI/FlyInText";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const FooterLinks = () => {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref);

  const renderContactLinks = (): JSX.Element[] => {
    return contactLinks.map(({ href, label }, idx) => (
      <motion.li
        key={label}
        animate={inView && VariantNames.Animate}
        initial={VariantNames.Initial}
        whileHover={VariantNames.Hover}
        variants={listItemVariants}
        custom={idx}
      >
        <Link href={href} className="text-lg font-medium uppercase">
          <FlyInText
            variants={linkVariants}
            text={label}
            secondaryText={label}
            secondaryClassName="font-bold"
          />
        </Link>
      </motion.li>
    ));
  };
  return (
    <ul ref={ref} className="flex flex-col self-end pr-8">
      {renderContactLinks()}
    </ul>
  );
};
export default FooterLinks;
