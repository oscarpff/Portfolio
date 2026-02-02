import { useExplorer, ExplorerItem } from "./TravnikExplorer";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const typeColors: Record<string, string> = {
  faction: "bg-gold/10 text-gold border-gold/30 hover:bg-gold/20",
  character: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20",
  material: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20",
  enemy: "bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20",
  lore: "bg-purple-500/10 text-purple-400 border-purple-500/30 hover:bg-purple-500/20",
  glossary: "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20",
  location: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
};

const typeLabels: Record<string, string> = {
  faction: "Faction",
  character: "Character",
  material: "Resource",
  enemy: "Enemy",
  lore: "Lore",
  glossary: "Term",
  location: "Location",
};

interface RelatedItemsProps {
  currentItem: ExplorerItem;
  onItemClick?: (item: ExplorerItem) => void;
}

export default function RelatedItems({ currentItem, onItemClick }: RelatedItemsProps) {
  const { getRelatedItems, openDetail } = useExplorer();
  
  const relatedItems = getRelatedItems(currentItem);

  if (relatedItems.length === 0) return null;

  const handleClick = (item: ExplorerItem) => {
    if (onItemClick) {
      onItemClick(item);
    } else {
      openDetail(item);
    }
  };

  return (
    <div className="border-t border-gold/10 pt-4 mt-6">
      <div className="flex items-center gap-2 mb-3">
        <ArrowRight className="w-4 h-4 text-gold/60" />
        <h4 className="text-sm font-semibold text-gold/80">Related</h4>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {relatedItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className={`
              inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
              border text-xs font-medium transition-all
              ${typeColors[item.type]}
            `}
          >
            {item.icon && <span>{item.icon}</span>}
            <span>{item.name}</span>
            <Badge variant="outline" className="ml-1 text-[10px] px-1 py-0 h-4 border-current opacity-60">
              {typeLabels[item.type]}
            </Badge>
          </button>
        ))}
      </div>
    </div>
  );
}
