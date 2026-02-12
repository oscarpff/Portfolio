import { ExternalLink, Terminal, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface WriteupCardProps {
  title: string;
  platform: string;
  difficulty: "Very Easy" | "Easy" | "Medium" | "Hard" | "Insane";
  description: string;
  tags: string[];
  index: number;
  link?: string;
  isExternal?: boolean;
  machineIcon?: string;
}

const difficultyColors = {
  "Very Easy": "bg-green-400/20 text-green-300 border-green-400/30",
  Easy: "bg-terminal/20 text-terminal border-terminal/30",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Hard: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Insane: "bg-red-500/20 text-red-400 border-red-500/30",
};

const WriteupCard = ({ title, platform, difficulty, description, tags, index, link, isExternal, machineIcon }: WriteupCardProps) => {
  const CardContent = (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {machineIcon ? (
            <div className="flex items-center justify-center w-12 h-12 flex-shrink-0">
              <img
                src={machineIcon}
                alt={title}
                className="w-12 h-12 object-contain"
              />
            </div>
          ) : (
            <div className="rounded-lg bg-cyber/10 border border-cyber/20 flex items-center justify-center w-12 h-12 flex-shrink-0">
              <Terminal className="w-6 h-6 text-cyber" />
            </div>
          )}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-cyber transition-colors">
              {title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground">{platform}</p>
          </div>
        </div>
        <Badge className={`${difficultyColors[difficulty]} border font-mono text-xs`}>
          {difficulty}
        </Badge>
      </div>
      
      <p className="font-body text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
      
      {link && (
        <div className="flex items-center gap-2 text-cyber text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity">
          {isExternal ? (
            <>
              Read Writeup <ExternalLink size={14} />
            </>
          ) : (
            <>
              View Details <ChevronRight size={14} />
            </>
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
          className="group card-cyber border-gradient-cyber rounded-lg p-6 transition-all duration-300 hover:glow-cyber hover:-translate-y-1 block h-full flex flex-col"
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
          className="group card-cyber border-gradient-cyber rounded-lg p-6 transition-all duration-300 hover:glow-cyber hover:-translate-y-1 block h-full flex flex-col"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {CardContent}
        </Link>
      );
    }
  }

  return (
    <div 
      className="group card-cyber border-gradient-cyber rounded-lg p-6 transition-all duration-300 hover:glow-cyber hover:-translate-y-1 h-full flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {CardContent}
    </div>
  );
};

export default WriteupCard;
