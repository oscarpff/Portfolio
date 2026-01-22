import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface WorkCardProps {
  title: string;
  category: string;
  description: string;
  excerpt?: string;
  index: number;
}

const WorkCard = ({ title, category, description, excerpt, index }: WorkCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article 
      className="group card-elevated border-gradient-gold rounded-lg p-6 md:p-8 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:glow-gold"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-gold text-xs tracking-[0.2em] uppercase font-body">
          {category}
        </span>
        <ChevronRight 
          className={`text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} 
          size={20} 
        />
      </div>
      
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground font-body leading-relaxed mb-4">
        {description}
      </p>
      
      {/* Expandable excerpt section */}
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground italic font-body leading-relaxed">
            "{excerpt}"
          </p>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gold/70 font-body">
        {isExpanded ? 'Click to collapse' : 'Click to read excerpt'}
      </div>
    </article>
  );
};

export default WorkCard;
