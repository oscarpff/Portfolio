import { Github, ExternalLink, Server, Bug, Network, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Home Lab Environment",
    icon: Server,
    description: "Built a comprehensive home lab with virtualized Active Directory, SIEM integration (Splunk/ELK), and network segmentation for security testing and learning.",
    technologies: ["VMware", "Active Directory", "Splunk", "pfSense"],
    link: "#",
  },
  {
    title: "Malware Analysis Sandbox",
    icon: Bug,
    description: "Automated malware analysis environment using REMnux and FlareVM. Analyzed ransomware samples and documented IOCs for threat intelligence.",
    technologies: ["REMnux", "FlareVM", "Python", "YARA"],
    link: "#",
  },
  {
    title: "Network Traffic Analyzer",
    icon: Network,
    description: "Python tool for capturing and analyzing network traffic, detecting anomalies, and generating alerts for suspicious patterns.",
    technologies: ["Python", "Scapy", "Wireshark", "Zeek"],
    link: "#",
  },
  {
    title: "Vulnerability Scanner",
    icon: Shield,
    description: "Custom vulnerability assessment tool that integrates with Nmap and CVE databases to identify and prioritize security issues.",
    technologies: ["Python", "Nmap", "API Integration", "SQLite"],
    link: "#",
  },
];

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
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group card-cyber border-gradient-cyber rounded-lg p-8 transition-all duration-300 hover:glow-cyber"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-cyber/10 border border-cyber/20 group-hover:bg-cyber/20 transition-colors">
                  <project.icon className="w-6 h-6 text-cyber" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-cyber transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="cyberOutline" size="sm" asChild>
                  <a href={project.link}>
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-cyber hover:text-cyber-glow">
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
