import { Badge } from "@/components/ui/badge";
import { useExplorer, ExplorerItem } from "./TravnikExplorer";

const relationshipTypes = {
  usesMaterial: { label: "Uses", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  memberOf: { label: "Member", color: "bg-gold/20 text-gold border-gold/30" },
  enemyOf: { label: "Enemy", color: "bg-red-500/20 text-red-300 border-red-500/30" },
  allyOf: { label: "Ally", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  locatedIn: { label: "Location", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  relatedTo: { label: "Related", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
};

interface Relationship {
  type: keyof typeof relationshipTypes;
  target: ExplorerItem;
}

interface RelationshipBadgesProps {
  itemId: string;
  itemType: string;
  compact?: boolean;
}

export default function RelationshipBadges({ itemId, itemType, compact = false }: RelationshipBadgesProps) {
  const { findCharacter, findFaction, openDetail } = useExplorer();

  // Determine relationships based on item type
  const getRelationships = (): Relationship[] => {
    const relationships: Relationship[] = [];

    if (itemType === "character") {
      const char = findCharacter(itemId);
      if (char) {
        // Add faction membership
        const factionId = char.faction === "ESAS" ? "esas" : 
                         char.faction === "INGENIEROS" ? "ingenieros" : 
                         char.faction === "PROSÉLITOS" ? "proslitos" : null;
        if (factionId) {
          const faction = findFaction(factionId);
          if (faction) {
            relationships.push({
              type: "memberOf",
              target: { id: factionId, type: "faction", name: faction.shortName, icon: faction.icon }
            });
          }
        }

        // Add material usage (all characters use materials in this world)
        relationships.push({
          type: "usesMaterial",
          target: { id: "elemento-444", type: "material", name: "Element 444", icon: "🧬" }
        });
        relationships.push({
          type: "usesMaterial",
          target: { id: "compuesto-t", type: "material", name: "Compound-T", icon: "⚗️" }
        });
      }
    }

    if (itemType === "faction") {
      // Factions are enemies/allies of other factions
      const faction = findFaction(itemId);
      if (faction) {
        if (itemId === "esas") {
          relationships.push({
            type: "enemyOf",
            target: { id: "proslitos", type: "faction", name: "Proselytes", icon: "⛪" }
          });
        }
        if (itemId === "ingenieros") {
          relationships.push({
            type: "allyOf",
            target: { id: "esas", type: "faction", name: "ESAS", icon: "🚀" }
          });
        }
      }
    }

    return relationships.slice(0, compact ? 2 : 4);
  };

  const relationships = getRelationships();

  if (relationships.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-1.5 ${compact ? '' : 'mt-2'}`}>
      {relationships.map((rel, index) => (
        <Badge
          key={`${rel.type}-${rel.target.id}-${index}`}
          variant="outline"
          className={`
            ${relationshipTypes[rel.type].color}
            cursor-pointer text-[10px] px-2 py-0.5 transition-all hover:scale-105
          `}
          onClick={(e) => {
            e.stopPropagation();
            openDetail(rel.target);
          }}
        >
          {rel.target.icon && <span className="mr-1">{rel.target.icon}</span>}
          {relationshipTypes[rel.type].label}: {rel.target.name}
        </Badge>
      ))}
    </div>
  );
}
