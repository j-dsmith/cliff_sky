"use client";
import HorizontalScrollContainer from "@/components/UI/HorizontalScrollContainer";
import { Project } from "@/../sanity/lib/queries/projects";

import ProjectThumbnails from "./ProjectThumbnails";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projectCardVariants } from "./variants";
import { VariantNames } from "../variants";
import { PortableText } from "@portabletext/react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: true });

  return (
    <motion.article
      ref={containerRef}
      animate={inView && VariantNames.Animate}
      variants={projectCardVariants}
      initial={VariantNames.Initial}
      className="w-full"
    >
      <HorizontalScrollContainer className="mb-6 scroll-pl-4 gap-4 px-4">
        <ProjectThumbnails images={project.images} />
      </HorizontalScrollContainer>

      <div className="px-4">
        <h3 className="mt-6 text-3xl">{project.title}</h3>
        <PortableText value={project.description} />
      </div>
    </motion.article>
  );
};
export default ProjectCard;
