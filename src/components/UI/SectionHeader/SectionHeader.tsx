"use client";
import FlyInText from "@/components/UI/FlyInText";
import clsx from "clsx";
import { headerContainerVariants, headerTextVariants } from "./variants";
import { Unbounded } from "next/font/google";
import { motion } from "framer-motion";
import { VariantNames } from "@/types/VariantNames";

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
      className={clsx(["mb-6"], className)}
    >
      <FlyInText
        text={textSegments.top}
        variants={headerTextVariants}
        className={clsx(
          ["text-4xl", "font-bold", "uppercase"],
          unbounded.className
        )}
      />
      {textSegments.bottom ? (
        <FlyInText
          text={textSegments.bottom}
          variants={headerTextVariants}
          className={clsx(
            ["text-4xl", "font-light", "uppercase"],
            unbounded.className
          )}
        />
      ) : null}
    </motion.div>
  );
};
export default SectionHeader;
