import ProjectCard from "./ProjectCard";
import { cyberProjects } from "@/data/cyberProjects";

const featuredProjects = cyberProjects.filter((project) => project.featured);
const projectsToShow = featuredProjects.length > 0 ? featuredProjects : cyberProjects;

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-ink/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            Security <span className="text-gradient-cyber">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hands-on projects that demonstrate practical security skills and tool development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsToShow.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
