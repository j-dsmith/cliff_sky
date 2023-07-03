"use client";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import HorizontalScrollContainer from "@/components/UI/HorizontalScrollContainer";
import { Project } from "@/../sanity/lib/queries/projects";
import ProjectThumbnails from "./ProjectThumbnails";
import { projectCardVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";
import Spacer from "@/components/UI/Spacer/Spacer";

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
      <HorizontalScrollContainer className="scroll-pl-4 gap-4 px-4 md:hidden md:px-6">
        <ProjectThumbnails images={project.images} />
      </HorizontalScrollContainer>

      <div className="hidden grid-cols-4 gap-x-4 px-4 md:grid md:gap-x-6 md:px-6">
        <ProjectThumbnails images={project.images} />
      </div>

      {/* TODO: Animate content */}
      <Spacer height="h-6" />
      <div className="px-4 md:px-6">
        <h3 className="text-2xl font-medium md:text-4xl">{project.title}</h3>
        <div className="text-stone-600 md:text-lg">
          <PortableText value={project.description} />
        </div>
      </div>
    </motion.article>
  );
};
export default ProjectCard;
