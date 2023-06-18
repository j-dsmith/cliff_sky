import { Projects } from "@/../sanity/lib/queries/projects";
import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";

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
    <section className="pt-12">
      <SectionHeader textSegments={{ top: "Selected", bottom: "Projects" }} />
      {renderProjects()}
    </section>
  );
};
export default Projects;
