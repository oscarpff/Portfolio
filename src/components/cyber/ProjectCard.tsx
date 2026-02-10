import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

interface ProjectCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }> | string;
  description: string;
  technologies: string[];
  index: number;
  link?: string;
  isExternal?: boolean;
  github?: string;
  demo?: string;
}

const ProjectCard = ({
  title,
  icon: Icon,
  description,
  technologies,
  index,
  link,
  isExternal,
  github,
  demo,
}: ProjectCardProps) => {
  const CardContent = (
    <>
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-cyber/10 border border-cyber/20 group-hover:bg-cyber/20 transition-colors flex-shrink-0">
          {typeof Icon === 'string' ? (
            <img src={Icon} alt="" className="w-6 h-6" />
          ) : (
            <Icon className="w-6 h-6 text-cyber" />
          )}
        </div>
        <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-cyber transition-colors">
          {title}
        </h3>
      </div>

      <p className="font-body text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {link && (
        <div className="text-sm text-cyber/70 font-body opacity-0 group-hover:opacity-100 transition-opacity mb-4 flex items-center gap-2">
          {isExternal ? "View Project" : "View Details"}
          {isExternal ? (
            <ExternalLink size={14} />
          ) : (
            <ChevronRight size={14} />
          )}
        </div>
      )}

      {(github || demo) && (
        <div className="flex gap-3 pt-4 border-t border-cyber/10 relative z-10">
          {github && (
            <Button
              variant="cyberOutline"
              size="sm"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
          )}
          {demo && (
            <Button
              variant="cyberOutline"
              size="sm"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      )}
    </>
  );

  if (link) {
    if (isExternal) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group card-cyber border-gradient-cyber rounded-lg p-8 transition-all duration-300 hover:glow-cyber block"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {CardContent}
        </a>
      );
    } else {
      return (
        <Link
          to={link}
          onClick={() => window.scrollTo(0, 0)}
          className="group card-cyber border-gradient-cyber rounded-lg p-8 transition-all duration-300 hover:glow-cyber block"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {CardContent}
        </Link>
      );
    }
  }

  return (
    <div
      className="group card-cyber border-gradient-cyber rounded-lg p-8 transition-all duration-300 hover:glow-cyber"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {CardContent}
    </div>
  );
};

export default ProjectCard;
