"use client";
import StaggeredText from "@/components/UI/StaggeredText";
import clsx from "clsx";
import { Unbounded } from "next/font/google";
import { variantProps } from "./variants";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["200", "500"] });

type Props = {
  textSegments: {
    top: string;
    bottom: string;
  };
};
const HeroBanner = ({ textSegments }: Props) => {
  const h1BaseClass = clsx(
    "3xs:text-7xl 2xs:text-8xl md:text-9xl",
    unbounded.className
  );
  return (
    <h1 className={h1BaseClass}>
      <div className="font-medium">
        <StaggeredText
          text={textSegments.top}
          variants={variantProps}
          delay={10}
        />
      </div>
      <div className="font-extralight leading-[1.1]">
        <StaggeredText
          text={textSegments.bottom}
          variants={variantProps}
          delay={12}
        />
      </div>
    </h1>
  );
};
export default HeroBanner;
