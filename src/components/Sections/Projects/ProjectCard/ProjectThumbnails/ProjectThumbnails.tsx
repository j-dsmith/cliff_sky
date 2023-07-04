"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectImages } from "@/../sanity/lib/queries/projects";
import { urlForImage } from "@/../sanity/lib/image";
import { thumbnailVariants } from "./variants";
import { responsiveImageSizes } from "@/constants/responsiveImageSizes";

type Props = {
  images: ProjectImages;
};

const ProjectThumbnails = ({ images }: Props) => {
  const renderThumbnails = () => {
    return images.map((image, idx) => (
      <motion.div
        key={image._key}
        custom={idx}
        variants={thumbnailVariants}
        className="relative aspect-square w-36 min-w-[144px] snap-start overflow-hidden rounded-lg md:w-full"
      >
        <Image
          alt=""
          src={urlForImage(image).url()}
          sizes={responsiveImageSizes.projectThumbnail}
          className="object-cover"
          fill={true}
        />
      </motion.div>
    ));
  };

  return renderThumbnails();
};
export default ProjectThumbnails;
