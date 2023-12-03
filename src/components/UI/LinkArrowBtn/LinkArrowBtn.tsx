"use client";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "next/font/google";
import clsx from "clsx";
import { motion, useAnimationControls } from "framer-motion";
import {
  btnVariants,
  iconContainerVariants,
  iconVariants,
  labelVariants,
} from "./variants";
import { useState } from "react";
import FlyInText from "../FlyInText/FlyInText";
import { VariantNames } from "@/types/VariantNames";

type ComponentProps = {
  href: string;
  label: string;
  linkClassName?: string;
};

type ButtonVariantProps = VariantProps<typeof buttonClasses>;

export interface ButtonProps extends ButtonVariantProps, ComponentProps {}

const buttonClasses = cva(["flex", "items-baseline", "gap-1", "uppercase"], {
  variants: {
    size: {
      sm: "text-lg",
      base: "text-xl",
      lg: "text-2xl",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

const unbounded = Unbounded({ subsets: ["latin"] });

const LinkArrowBtn = ({ href, label, size, linkClassName }: ButtonProps) => {
  const [animationPlaying, setAnimationPlaying] = useState(false);
  const controls = useAnimationControls();

  const handleHoverStart = () => {
    if (!animationPlaying) {
      setAnimationPlaying(true);
      controls.start(VariantNames.Hover);
    }
  };

  const handleAnimationEnd = () => {
    setAnimationPlaying(false);
  };

  return (
    <a href={href} className={linkClassName}>
      <motion.div
        initial={VariantNames.Initial}
        whileHover={VariantNames.Hover}
        onHoverStart={handleHoverStart}
        onAnimationComplete={handleAnimationEnd}
        variants={btnVariants}
        className={clsx(buttonClasses({ size }), unbounded.className)}
      >
        <FlyInText
          variants={labelVariants}
          text={label}
          secondaryText={label}
        />
        <motion.div
          variants={iconContainerVariants}
          layout
          className="relative hidden h-1.5 w-1.5 place-items-center overflow-hidden rounded-full bg-cs-mustard-400 md:grid md:h-2 md:w-2"
        >
          <motion.div className="absolute" variants={iconVariants}>
            <Image
              alt="arrow-icon"
              src="/arrow-up-right.svg"
              height={20}
              width={20}
            />
          </motion.div>
        </motion.div>

        <div className="relative grid h-1.5 w-1.5 -translate-y-1 translate-x-2 scale-[5] transform place-items-center overflow-hidden rounded-full bg-cs-mustard-400 md:hidden md:h-2 md:w-2">
          <div className="absolute md:hidden">
            <Image
              alt="arrow-icon"
              src="/arrow-up-right.svg"
              height={20}
              width={20}
            />
          </div>
        </div>
      </motion.div>
    </a>
  );
};
export default LinkArrowBtn;
