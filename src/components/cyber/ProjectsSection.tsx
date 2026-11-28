import ProjectCard from "./ProjectCard";
import { cyberProjects } from "@/data/cyberProjects";

const projects = cyberProjects.filter((project) => !project.lab);

const ProjectsSection = () => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-20 md:py-24 bg-ink/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            Selected <span className="text-gradient-cyber">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Work focused on oversight, tracking and reporting for security operations.
          </p>
        </div>

        <div
          className={
            projects.length === 1
              ? "max-w-2xl mx-auto"
              : "grid md:grid-cols-2 gap-8"
          }
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
