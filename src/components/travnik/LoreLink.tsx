import { ReactNode, useState } from "react";
import { useExplorer, ExplorerItemType } from "./TravnikExplorer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const typeStyles: Record<ExplorerItemType, string> = {
  faction: "text-gold underline decoration-gold/30 hover:decoration-gold cursor-pointer",
  character: "text-cyan-400 underline decoration-cyan-400/30 hover:decoration-cyan-400 cursor-pointer",
  material: "text-emerald-400 underline decoration-emerald-400/30 hover:decoration-emerald-400 cursor-pointer",
  enemy: "text-red-400 underline decoration-red-400/30 hover:decoration-red-400 cursor-pointer",
  lore: "text-purple-400 underline decoration-purple-400/30 hover:decoration-purple-400 cursor-pointer",
  glossary: "text-amber-400 underline decoration-amber-400/30 hover:decoration-amber-400 cursor-pointer",
  location: "text-blue-400 underline decoration-blue-400/30 hover:decoration-blue-400 cursor-pointer",
};

interface LoreLinkProps {
  id: string;
  type: ExplorerItemType;
  children: ReactNode;
  showTooltip?: boolean;
}

export default function LoreLink({ id, type, children, showTooltip = true }: LoreLinkProps) {
  const { 
    findFaction, 
    findCharacter, 
    findMaterial, 
    findEnemy, 
    findLore, 
    findGlossary,
    openDetail 
  } = useExplorer();
  
  const [isHovered, setIsHovered] = useState(false);

  // Get preview content based on type
  const getPreviewContent = (): { name: string; preview: string; icon?: string } | null => {
    switch (type) {
      case "faction": {
        const faction = findFaction(id);
        if (faction) return { name: faction.shortName, preview: faction.tagline, icon: faction.icon };
        break;
      }
      case "character": {
        const char = findCharacter(id);
        if (char) return { name: char.name, preview: char.role + " - " + char.species, icon: "👤" };
        break;
      }
      case "material": {
        const mat = findMaterial(id);
        if (mat) return { name: mat.name, preview: mat.type === "biomolecule" ? "Biomolecule" : "Mineral", icon: mat.type === "biomolecule" ? "🧬" : "⚗️" };
        break;
      }
      case "enemy": {
        const enemy = findEnemy(id);
        if (enemy) return { name: enemy.name, preview: enemy.stage + " stage", icon: "💀" };
        break;
      }
      case "lore": {
        const lore = findLore(id);
        if (lore) return { name: lore.title, preview: lore.summary.slice(0, 80) + "...", icon: lore.icon };
        break;
      }
      case "glossary": {
        const term = findGlossary(id);
        if (term) return { name: term.term, preview: term.definition.slice(0, 80) + "...", icon: "📖" };
        break;
      }
    }
    return null;
  };

  const handleClick = () => {
    const preview = getPreviewContent();
    if (preview) {
      openDetail({
        id,
        type,
        name: preview.name,
        icon: preview.icon,
      });
    }
  };

  const preview = getPreviewContent();

  if (!preview) {
    return <span>{children}</span>;
  }

  const linkElement = (
    <span
      className={`${typeStyles[type]} transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-90'}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </span>
  );

  if (!showTooltip) {
    return linkElement;
  }

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          {linkElement}
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="max-w-xs bg-black/95 border-gold/20 p-3"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {preview.icon && <span>{preview.icon}</span>}
              <span className="font-semibold text-gold">{preview.name}</span>
            </div>
            <p className="text-xs text-muted-foreground">{preview.preview}</p>
            <p className="text-[10px] text-gold/60 mt-1">Click to explore →</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
