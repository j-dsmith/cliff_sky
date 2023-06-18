"use client";
import FlyInText from "@/components/UI/FlyInText";
import clsx from "clsx";
import { headerContainerVariants, headerTextVariants } from "./variants";
import { Unbounded } from "next/font/google";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VariantNames } from "./variants";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300", "700"] });

type Props = {
  textSegments: { top: string; bottom: string };
};

const SectionHeader = ({ textSegments }: Props) => {
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerContainerRef, { amount: 0.3, once: true });

  return (
    <motion.div
      animate={isInView && VariantNames.Animate}
      initial={VariantNames.Initial}
      variants={headerContainerVariants}
      ref={headerContainerRef}
      className="mb-6 px-4"
    >
      <FlyInText
        text={textSegments.top}
        variants={headerTextVariants}
        className={clsx(
          ["text-4xl", "font-bold", "uppercase"],
          unbounded.className
        )}
      />
      <FlyInText
        text={textSegments.bottom}
        variants={headerTextVariants}
        className={clsx(
          ["text-4xl", "font-light", "uppercase"],
          unbounded.className
        )}
      />
    </motion.div>
  );
};
export default SectionHeader;
