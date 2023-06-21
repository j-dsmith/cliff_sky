"use client";
import StaggeredText from "@/components/UI/StaggeredText";
import clsx from "clsx";
import { Unbounded } from "next/font/google";
import { variantProps } from "./variants";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["200", "500"] });

const HeroBanner = () => {
  const h1BaseClass = clsx("text-8xl", unbounded.className);
  return (
    <h1 className={h1BaseClass}>
      <div className="font-medium">
        <StaggeredText text="Cliff" variants={variantProps} delay={10} />
      </div>
      <div className="font-extralight leading-[1.1]">
        <StaggeredText text="& Sky" variants={variantProps} delay={12} />
      </div>
    </h1>
  );
};
export default HeroBanner;
