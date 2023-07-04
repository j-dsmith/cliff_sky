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
    "3xs:text-8xl 2xs:text-9xl md:text-10xl lg:flex lg:text-11xl lg:leading-[1.1]",
    unbounded.className
  );
  return (
    <h1 className={h1BaseClass}>
      <div className="font-medium leading-[0.95] lg:leading-[revert]">
        <StaggeredText
          text={textSegments.top}
          variants={variantProps}
          delay={10}
        />
      </div>
      <div className="font-extralight leading-[1.1] lg:leading-[revert]">
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
