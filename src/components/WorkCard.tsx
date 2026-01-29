import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface WorkCardProps {
  title: string;
  category: string;
  description: string;
  excerpt?: string;
  index: number;
  link?: string;
  logo?: string;
  logoAlt?: string;
}

const WorkCard = ({ title, category, description, excerpt, index, link, logo, logoAlt }: WorkCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (link) {
      // If there's a link, don't toggle expansion, navigate instead
      return;
    }
    setIsExpanded(!isExpanded);
  };

  const CardContent = (
    <>
      <div className="flex items-start justify-between mb-4">
        <span className="text-gold text-xs tracking-[0.2em] uppercase font-body">
          {category}
        </span>
        <ChevronRight 
          className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" 
          size={20} 
        />
      </div>
      
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      
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
      
      {/* Show "View project" hint if there's a link */}
      {link && (
        <div className="mt-4 text-sm text-gold/70 font-body flex items-center gap-2">
          View full project <ChevronRight size={14} />
        </div>
      )}
      
      {/* Organization logo badge - subtle bottom-right */}
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
