"use client";
import FlyInText from "@/components/UI/FlyInText";
import clsx from "clsx";
import { headerContainerVariants, headerTextVariants } from "./variants";
import { Unbounded } from "next/font/google";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VariantNames } from "../variants";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300"] });

const ProjectsHeader = () => {
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerContainerRef, { amount: 0.3, once: true });

  return (
    <motion.div
      animate={isInView && VariantNames.Animate}
      initial={VariantNames.Initial}
      whileHover={{ backgroundColor: "red" }}
      variants={headerContainerVariants}
      ref={headerContainerRef}
      className="mb-6 px-4"
    >
      <FlyInText
        text="Selected"
        variants={headerTextVariants}
        className={clsx(
          ["text-4xl", "font-semibold", "uppercase"],
          unbounded.className
        )}
      />
      <FlyInText
        text="Projects"
        variants={headerTextVariants}
        className={clsx(
          ["text-4xl", "font-semibold", "uppercase"],
          unbounded.className
        )}
      />
    </motion.div>
  );
};
export default ProjectsHeader;
