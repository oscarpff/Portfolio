import WriteupCard from "./WriteupCard";
import ProjectCard from "./ProjectCard";
import { writeups } from "@/data/writeups";
import { cyberProjects } from "@/data/cyberProjects";

const labProjects = cyberProjects.filter((project) => project.lab);

const TechnicalLabSection = () => {
  if (writeups.length === 0 && labProjects.length === 0) {
    return null;
  }

  return (
    <section id="lab" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Technical Lab
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            Hands-on <span className="text-gradient-cyber">Practice</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technical exercises I keep up to understand how attacks and investigations
            work in practice, so I can better assess the controls designed to stop them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {writeups.map((writeup, index) => (
            <WriteupCard key={writeup.title} {...writeup} index={index} />
          ))}
          {labProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={writeups.length + index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalLabSection;
