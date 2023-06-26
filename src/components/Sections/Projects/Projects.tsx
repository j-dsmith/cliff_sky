import { Projects } from "@/../sanity/lib/queries/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "@/components/UI/SectionHeader";
import LinkArrowBtn from "@/components/UI/LinkArrowBtn";
import Spacer from "@/components/UI/Spacer/Spacer";

type Props = {
  projects: Projects;
};

const Projects = ({ projects }: Props) => {
  const renderProjects = () => {
    return projects.map((project) => (
      <ProjectCard key={project._id} project={project} />
    ));
  };

  return (
    <section className="pb-20 pt-12 md:pb-32">
      <SectionHeader
        textSegments={{ top: "Selected", bottom: "Projects" }}
        className="px-4 md:px-6"
      />
      <Spacer height="h-8" />
      {renderProjects()}
      <Spacer height="h-12" />
      <div className="flex justify-center">
        <LinkArrowBtn
          href="#"
          label="Full Design CV"
          size="base"
          linkClassName="md:hidden"
        />
        <LinkArrowBtn
          href="#"
          label="Full Design CV"
          size="lg"
          linkClassName="hidden md:block"
        />
      </div>
    </section>
  );
};
export default Projects;
