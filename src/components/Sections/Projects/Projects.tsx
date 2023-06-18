import { Projects } from "@/../sanity/lib/queries/projects";
import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";

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
    <section className="w-full pt-12">
      <ProjectsHeader />
      {renderProjects()}
    </section>
  );
};
export default Projects;
