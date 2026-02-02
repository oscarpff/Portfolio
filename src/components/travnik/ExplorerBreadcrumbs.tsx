import { ChevronRight, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useExplorer, ExplorerItem } from "./TravnikExplorer";

const typeColors: Record<string, string> = {
  faction: "text-gold",
  character: "text-cyan-400",
  material: "text-emerald-400",
  enemy: "text-red-400",
  lore: "text-purple-400",
  glossary: "text-amber-400",
  location: "text-blue-400",
};

interface ExplorerBreadcrumbsProps {
  onNavigate?: (item: ExplorerItem) => void;
}

export default function ExplorerBreadcrumbs({ onNavigate }: ExplorerBreadcrumbsProps) {
  const { breadcrumbs, navigateTo, clearBreadcrumbs, openDetail } = useExplorer();

  if (breadcrumbs.length === 0) return null;

  const handleClick = (index: number) => {
    navigateTo(index);
    const item = breadcrumbs[index];
    if (item && onNavigate) {
      onNavigate(item);
    } else if (item) {
      openDetail(item);
    }
  };

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 max-w-[90vw]">
      <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-black/90 backdrop-blur-sm border border-gold/20 shadow-xl">
        {/* Home icon */}
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
          <Home className="w-3 h-3" />
          <span className="hidden sm:inline">Explored:</span>
        </div>
        
        {/* Breadcrumb items */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-[60vw] scrollbar-none">
          {breadcrumbs.map((crumb, index) => (
            <div key={`${crumb.id}-${crumb.timestamp}`} className="flex items-center gap-1 flex-shrink-0">
              {index > 0 && (
                <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
              )}
              <button
                onClick={() => handleClick(index)}
                className={`
                  px-2 py-1 rounded text-xs font-medium transition-colors
                  hover:bg-white/10 ${typeColors[crumb.type]}
                  ${index === breadcrumbs.length - 1 ? 'bg-white/5' : ''}
                `}
              >
                {crumb.icon && <span className="mr-1">{crumb.icon}</span>}
                <span className="hidden sm:inline">{crumb.name}</span>
                <span className="sm:hidden">{crumb.name.split(' ')[0]}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Clear button */}
        <Button
          variant="ghost"
          size="icon"
          className="w-6 h-6 ml-2 text-muted-foreground hover:text-white"
          onClick={clearBreadcrumbs}
        >
          <X className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}
