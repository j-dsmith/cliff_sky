"use client";
import { contactLinks } from "@/data/contactLinks";
import { linkVariants, listItemVariants } from "./variants";
import FlyInText from "@/components/UI/FlyInText";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { VariantNames } from "@/types/VariantNames";

const FooterLinks = () => {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  const renderContactLinks = (): JSX.Element[] => {
    return contactLinks.map(({ href, label }, idx) => (
      <motion.li
        key={label}
        layout
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
