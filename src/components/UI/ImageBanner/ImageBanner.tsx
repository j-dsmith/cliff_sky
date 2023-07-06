"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { imgBannerVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";
import {
  ImageBannerRole,
  responsiveImageSizes,
} from "@/constants/responsiveImageSizes";

type Props = {
  src: StaticImageData;
  role: ImageBannerRole;
  delay?: number;
  blurDataURL?: string;
  className?: string;
  priority?: boolean;
  staticAnimation?: boolean;
};

const ImageBanner = ({
  src,
  role,
  className,
  priority,
  staticAnimation,
  blurDataURL,
  delay,
}: Props) => {
  return (
    <motion.div
      whileInView={VariantNames.Animate}
      viewport={{ once: true, amount: 0.4 }}
      initial={VariantNames.Initial}
      custom={delay}
      variants={staticAnimation ? {} : imgBannerVariants}
      className={clsx(
        "relative w-full self-end overflow-hidden rounded-xl md:min-h-[400px]",
        className
      )}
    >
      <Image
        src={src}
        sizes={responsiveImageSizes[role]}
        fill
        fetchPriority="high"
        quality={95}
        priority={priority}
        alt="hero"
        placeholder="blur"
        blurDataURL={blurDataURL}
        className="object-cover"
      />
    </motion.div>
  );
};
export default ImageBanner;
