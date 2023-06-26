"use client";
import FlyInText from "@/components/UI/FlyInText";
import clsx from "clsx";
import { headerContainerVariants, headerTextVariants } from "./variants";

import { motion } from "framer-motion";
import { VariantNames } from "@/types/VariantNames";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300", "700"] });

type Props = {
  textSegments: { top: string; bottom?: string };
  className?: string;
};

const SectionHeader = ({ textSegments, className }: Props) => {
  return (
    <motion.div
      whileInView={VariantNames.Animate}
      layout
      viewport={{ once: true, amount: 1 }}
      initial={VariantNames.Initial}
      variants={headerContainerVariants}
      className={clsx(
        "uppercase 3xs:text-3xl 2xs:text-4xl md:text-5xl",
        className
      )}
    >
      <FlyInText
        text={textSegments.top}
        variants={headerTextVariants}
        className={clsx("font-bold", unbounded.className)}
      />
      {textSegments.bottom ? (
        <FlyInText
          text={textSegments.bottom}
          variants={headerTextVariants}
          className={clsx("font-light", unbounded.className)}
        />
      ) : null}
    </motion.div>
  );
};
export default SectionHeader;
