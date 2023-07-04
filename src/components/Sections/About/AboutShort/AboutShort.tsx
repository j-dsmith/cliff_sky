"use client";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { Bio } from "@/../sanity/lib/queries/bio";
import { bioContentVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";

type Props = {
  bio: Bio;
};
const AboutShort = ({ bio }: Props) => {
  return (
    <motion.div
      whileInView={VariantNames.Animate}
      viewport={{ once: true, amount: 1 }}
      initial={VariantNames.Initial}
      variants={bioContentVariants}
      className="max-w-[55ch] text-stone-600 md:text-lg"
    >
      <PortableText value={bio.bio_short} />
    </motion.div>
  );
};
export default AboutShort;
