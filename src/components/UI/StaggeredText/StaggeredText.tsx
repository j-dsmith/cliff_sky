"use client";
import { VariantNames } from "@/types/VariantNames";
import { Variants, motion } from "framer-motion";

/**
 * @param text - Main text to be animated
 * @param custom - Custom prop to be used for animation
 * @param className - Classname to be applied to main text
 * @param variants - Variants to be used for animation
 * @param delay - Delay to be used for animation
 *
 */
type Props = {
  text: string;
  custom?: number;
  className?: string;
  variants: { charVariants: Variants; containerVariants: Variants };
  delay?: number;
};

/**
 * Component to animate each character of a string in a staggered fashion
 */

const StaggeredText = (props: Props) => {
  const renderChars = (text: string) => {
    return text.split("").map((char, index) => {
      return (
        <motion.span
          key={`${char}:${index}`}
          layout
          variants={props.variants.charVariants}
          className="relative inline-block"
        >
          {char}
        </motion.span>
      );
    });
  };

  return (
    <motion.div
      layout
      custom={props.delay ?? 0}
      initial={VariantNames.Initial}
      animate={VariantNames.Animate}
      variants={props.variants.containerVariants}
      className="h-full overflow-hidden"
    >
      {renderChars(props.text)}
    </motion.div>
  );
};
export default StaggeredText;
