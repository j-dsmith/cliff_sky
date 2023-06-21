"use client";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { Bio } from "@/../sanity/lib/queries/bio";
import { bioContentVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";

type Props = {
  bio: Bio;
};
const AboutContent = ({ bio }: Props) => {
  return (
    <motion.div
      whileInView={VariantNames.Animate}
      viewport={{ once: true, amount: 0.3 }}
      initial={VariantNames.Initial}
      variants={bioContentVariants}
    >
      <PortableText value={bio.bio_short} />
    </motion.div>
  );
};
export default AboutContent;
