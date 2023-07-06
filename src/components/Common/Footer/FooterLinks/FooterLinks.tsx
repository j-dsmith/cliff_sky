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
      <a key={label} href={href} className="text-lg uppercase md:text-xl">
        <motion.li
          layout
          animate={inView && VariantNames.Animate}
          initial={VariantNames.Initial}
          whileHover={VariantNames.Hover}
          variants={listItemVariants}
          custom={idx}
        >
          <FlyInText
            variants={linkVariants}
            text={label}
            secondaryText={label}
            secondaryClassName="font-bold lg:font-semibold"
          />
        </motion.li>
      </a>
    ));
  };
  return (
    <ul
      ref={ref}
      className="flex flex-col gap-1 self-end xs:pr-4 md:gap-2 md:pr-8"
    >
      {renderContactLinks()}
    </ul>
  );
};
export default FooterLinks;
