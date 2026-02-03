import { useState } from "react";
import { ChevronRight, ExternalLink, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface WorkCardProps {
  title: string;
  category: string;
  description: string;
  excerpt?: string;
  index: number;
  link?: string;
  isExternal?: boolean;
  logo?: string;
  logoAlt?: string;
  tags?: string[];
}

const WorkCard = ({ title, category, description, excerpt, index, link, isExternal, logo, logoAlt, tags }: WorkCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const isGame = category === "Games" || category === "Published Game";

  const handleClick = (e: React.MouseEvent) => {
    if (link) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  const CardContent = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {isGame && <Gamepad2 className="w-4 h-4 text-gold" />}
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-body">
            {category}
          </span>
        </div>
        {isExternal ? (
          <ExternalLink 
            className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
            size={18} 
          />
        ) : (
          <ChevronRight 
            className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" 
            size={20} 
          />
        )}
      </div>
      
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      
      {/* Tags for games */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-gold/30 text-gold/80 bg-gold/5">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      
      <p className="text-muted-foreground font-body leading-relaxed mb-4">
        {description}
      </p>
      
      {/* Expandable excerpt section - only show if no link */}
      {!link && excerpt && (
        <>
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
        </>
      )}
      
      {/* Show action hint if there's a link */}
      {link && (
        <div className="mt-4 text-sm text-gold/70 font-body flex items-center gap-2">
          {isExternal ? "Play on Itch.io" : "View full project"} 
          {isExternal ? <ExternalLink size={14} /> : <ChevronRight size={14} />}
        </div>
      )}
      
      {/* Organization logo badge */}
      {logo && (
        <div className="absolute bottom-4 right-4 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
          <img 
            src={logo} 
            alt={logoAlt || "Organization logo"}
            className="h-7 w-auto"
          />
        </div>
      )}
    </>
  );

  if (link) {
    // External links open in new tab
    if (isExternal) {
      return (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group card-elevated border-gradient-gold rounded-lg p-6 md:p-8 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:glow-gold relative"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {CardContent}
        </a>
      );
    }
    
    // Internal links use React Router
    return (
      <Link 
        to={link}
        className="block group card-elevated border-gradient-gold rounded-lg p-6 md:p-8 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:glow-gold relative"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <article 
      className="group card-elevated border-gradient-gold rounded-lg p-6 md:p-8 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:glow-gold relative"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleClick}
    >
      {CardContent}
    </article>
  );
};

export default WorkCard;
