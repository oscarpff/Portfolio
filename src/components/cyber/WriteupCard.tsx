import { ExternalLink, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WriteupCardProps {
  title: string;
  platform: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Insane";
  description: string;
  tags: string[];
  index: number;
}

const difficultyColors = {
  Easy: "bg-terminal/20 text-terminal border-terminal/30",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Hard: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Insane: "bg-red-500/20 text-red-400 border-red-500/30",
};

const WriteupCard = ({ title, platform, difficulty, description, tags, index }: WriteupCardProps) => {
  return (
    <div 
      className="group card-cyber border-gradient-cyber rounded-lg p-6 transition-all duration-300 hover:glow-cyber hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyber/10 border border-cyber/20">
            <Terminal className="w-5 h-5 text-cyber" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-cyber transition-colors">
              {title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground">{platform}</p>
          </div>
        </div>
        <Badge className={`${difficultyColors[difficulty]} border font-mono text-xs`}>
          {difficulty}
        </Badge>
      </div>
      
      <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-secondary rounded text-xs font-mono text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
      
      <button className="flex items-center gap-2 text-cyber text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity">
        Read Writeup <ExternalLink size={14} />
      </button>
    </div>
  );
};

export default WriteupCard;
