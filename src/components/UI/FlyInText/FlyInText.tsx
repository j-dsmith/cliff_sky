"use client";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";

/**
 * @param text - Main text to be animated
 * @param secondaryText - Secondary text to be animated
 * @param variants - Variants to be used for animation
 * @param custom - Custom prop to be used for animation
 * @param className - Classname to be applied to main text
 * @param secondaryClassName - Classname to be applied to secondary text
 */
type Props = {
  text: string;
  secondaryText?: string;
  variants: Variants;
  custom?: number;
  className?: string;
  secondaryClassName?: string;
};

// - Component for animating text in from out of view in parent container
// - Should be wrapped in a parent container with an "animate" prop if not part of a parent animation's
// variant sequence of animations
const FlyInText = (props: Props) => {
  return (
    <div className="overflow-hidden">
      <motion.p
        className={clsx(
          "relative flex flex-col pr-1 leading-[1.2] will-change-transform",
          props.className
        )}
        variants={props.variants}
        custom={props.custom}
      >
        {props.text}
        {/* Passing secondaryText prop renders it below main text and slides it up into view */}
        {props.secondaryText && (
          <span
            className={clsx(
              "absolute -bottom-full left-0",
              props.secondaryClassName
            )}
          >
            {props.secondaryText}
          </span>
        )}
      </motion.p>
    </div>
  );
};
export default FlyInText;
