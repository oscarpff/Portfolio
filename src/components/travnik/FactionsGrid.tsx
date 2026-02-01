import { Faction, Character } from "@/data/travnikLore";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FactionsGridProps {
  factions: Faction[];
  characters: Character[];
}

function ExpandableText({ text, maxChars = 200 }: { text: string; maxChars?: number }) {
  const [expanded, setExpanded] = useState(false);
  const needsExpand = text.length > maxChars;
  const displayText = expanded ? text : text.slice(0, maxChars);

  return (
    <div className="space-y-1">
      <p className="text-muted-foreground">{displayText}{!expanded && needsExpand ? "..." : ""}</p>
      {needsExpand && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-gold/70 hover:text-gold transition-colors"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-muted/20 p-4 transition-all hover:border-gold/30 hover:bg-muted/30">
      <div className="flex gap-4">
        {/* Small Character Image */}
        <div className="flex-shrink-0">
          <div className="h-24 w-24 overflow-hidden rounded-lg bg-muted/40">
            <img
              src={character.imageUrl}
              alt={character.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/100x100?text=" + character.name;
              }}
            />
          </div>
        </div>

        {/* Character Info */}
        <div className="flex-1 space-y-2">
          <div>
            <h4 className="font-display text-lg font-semibold text-gold">{character.name}</h4>
            <p className="text-xs text-muted-foreground">{character.role}</p>
            <p className="text-xs italic text-muted-foreground/70">{character.species}</p>
          </div>

          <div className="text-xs space-y-1">
            <p className="text-muted-foreground line-clamp-2">{character.personality}</p>
            <div className="flex gap-2 flex-wrap pt-1">
              <span className="text-emerald-400/80 text-xs">↑ {character.abilities.active.split("→")[0].trim()}</span>
              <span className="text-cyan-400/80 text-xs">↓ {character.abilities.passive.split("→")[0].trim()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FactionsGrid({ factions, characters }: FactionsGridProps) {
  const [expandedFaction, setExpandedFaction] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {factions.map((faction) => {
        const isExpanded = expandedFaction === faction.id;
        
        // Map faction IDs to character faction strings
        const factionMap: Record<string, string> = {
          esas: "ESAS",
          ingenieros: "INGENIEROS",
          proslitos: "PROSÉLITOS",
        };
        
        const factionCharacters = characters.filter(
          (char) => char.faction === factionMap[faction.id as keyof typeof factionMap]
        );

        return (
          <div
            key={faction.id}
            className="rounded-lg border border-white/10 bg-muted/5 overflow-hidden transition-all hover:border-gold/30"
          >
            {/* Header */}
            <button
              onClick={() => setExpandedFaction(isExpanded ? null : faction.id)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/10 transition-colors"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-3xl">{faction.icon}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {faction.shortName}
                  </h3>
                  <p className="text-sm italic text-muted-foreground mt-1">
                    {faction.tagline}
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`h-6 w-6 text-gold transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="border-t border-white/10 px-6 py-6 space-y-6">
                {/* Faction Details */}
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gold mb-2 text-sm">Description</p>
                    <ExpandableText text={faction.description} maxChars={250} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gold mb-2 text-sm">Organization</p>
                      <ExpandableText text={faction.organization} maxChars={180} />
                    </div>

                    <div>
                      <p className="font-semibold text-gold mb-2 text-sm">Knowledge</p>
                      <ExpandableText text={faction.knowledge} maxChars={180} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-gold mb-2 text-sm">Objectives</p>
                    <ExpandableText text={faction.objectives} maxChars={250} />
                  </div>
                </div>

                {/* Characters in Faction */}
                {factionCharacters.length > 0 && (
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-semibold text-gold mb-4 text-sm">
                      Characters ({factionCharacters.length})
                    </p>
                    <div className="space-y-3">
                      {factionCharacters.map((char) => (
                        <CharacterCard key={char.id} character={char} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
