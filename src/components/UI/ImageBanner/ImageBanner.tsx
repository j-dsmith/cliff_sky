"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { imgBannerVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";

type Props = {
  src: StaticImageData;
  className?: string;
};

const ImageBanner = ({ src, className }: Props) => {
  return (
    <motion.div
      whileInView={VariantNames.Animate}
      viewport={{ once: true, amount: 0.3 }}
      initial={VariantNames.Initial}
      variants={imgBannerVariants}
      className={clsx(
        "relative w-full self-end overflow-hidden rounded-3xl",
        className
      )}
    >
      <Image src={src} fill alt="hero" className="object-cover" />
    </motion.div>
  );
};
export default ImageBanner;
