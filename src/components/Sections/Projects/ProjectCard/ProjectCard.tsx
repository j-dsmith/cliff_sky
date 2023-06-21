"use client";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import HorizontalScrollContainer from "@/components/UI/HorizontalScrollContainer";
import { Project } from "@/../sanity/lib/queries/projects";
import ProjectThumbnails from "./ProjectThumbnails";
import { projectCardVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.article
      whileInView={VariantNames.Animate}
      viewport={{ amount: 1, once: true }}
      variants={projectCardVariants}
      initial={VariantNames.Initial}
      className="w-full"
    >
      <HorizontalScrollContainer className="mb-6 scroll-pl-4 gap-4 px-4">
        <ProjectThumbnails images={project.images} />
      </HorizontalScrollContainer>

      {/* TODO: Animate content */}
      <div className="px-4">
        <h3 className="mt-6 text-3xl">{project.title}</h3>
        <PortableText value={project.description} />
      </div>
    </motion.article>
  );
};
export default ProjectCard;
