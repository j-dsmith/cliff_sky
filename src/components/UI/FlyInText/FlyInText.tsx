import clsx from "clsx";
import { Variants, motion } from "framer-motion";

type Props = {
  text: string;
  secondaryText?: string;
  variants: Variants;
  custom?: number;
  className?: string;
};

// - Component for animating text in from out of view in parent container
// - Should be wrapped in a parent container with an "animate" prop if not part of a parent animation's
// variant sequence of animations
const FlyInText = (props: Props) => {
  return (
    <div className="h-full overflow-hidden">
      <motion.p
        className={clsx(["relative"], props.className)}
        variants={props.variants}
        custom={props.custom}
      >
        {props.text}
        {/* Passing secondaryText prop renders it below main text and slides it up into view */}
        {props.secondaryText && (
          <span className="absolute -bottom-full left-0">
            {props.secondaryText}
          </span>
        )}
      </motion.p>
    </div>
  );
};
export default FlyInText;
