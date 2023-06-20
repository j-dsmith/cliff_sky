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
  VariantNames,
} from "./variants";
import { useState } from "react";
import FlyInText from "../FlyInText/FlyInText";

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
    // controls.start(VariantNames.Initial);
  };

  return (
    <Link role="link" href={href} className={linkClassName}>
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
          className="relative grid h-1.5 w-1.5 place-items-center overflow-hidden rounded-full bg-orange-500"
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
      </motion.div>
    </Link>
  );
};
export default LinkArrowBtn;
