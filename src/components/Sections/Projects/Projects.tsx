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
        className="3xs:px-2 xs:px-4 md:px-6 lg:px-8 2xl:px-16"
      />
      <Spacer height="h-8" />
      {renderProjects()}
      <Spacer height="h-12" />

      <div className="flex justify-center">
        <LinkArrowBtn
          href="/CV.pdf"
          label="Design Portfolio"
          size="base"
          linkClassName="md:hidden"
        />
        <LinkArrowBtn
          href="/CV.pdf"
          label="Design Portfolio"
          size="lg"
          linkClassName="hidden md:block"
        />
      </div>
    </section>
  );
};
export default Projects;
