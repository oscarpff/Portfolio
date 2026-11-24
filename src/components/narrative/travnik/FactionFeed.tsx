import { useState } from "react";
import { Faction, Character, LoreSection } from "@/data/travnikLore";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import RelationshipBadges from "./RelationshipBadges";

interface FactionFeedProps {
  factions: Faction[];
  characters: Character[];
  loreSections?: LoreSection[];
}

export default function FactionFeed({ factions, characters, loreSections = [] }: FactionFeedProps) {
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showLoreModal, setShowLoreModal] = useState(false);
  const [selectedLore, setSelectedLore] = useState<LoreSection | null>(null);

  const getImageUrl = (path: string) => {
    if (!path) return "";
    if (/^https?:\/\//i.test(path)) return path;
    const encode = (p: string) =>
      p.split("/").map((segment) => encodeURIComponent(segment)).join("/");
    const baseUrl = import.meta.env.BASE_URL || "/";
    // Paths from getAssetUrl() already include the base URL — don't prefix it twice.
    if (path.startsWith(baseUrl)) return encode(path);
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${baseUrl.replace(/\/$/, "")}${encode(normalized)}`;
  };

  const factionMap: Record<string, string> = {
    esas: "ESAS",
    ingenieros: "INGENIEROS",
    proslitos: "PROSÉLITOS",
  };

  const getFactionCharacters = (faction: Faction) => {
    return characters.filter(
      (char) => char.faction === factionMap[faction.id as keyof typeof factionMap]
    );
  };

  const handleFactionSelect = (faction: Faction) => {
    setSelectedFaction(faction);
    setShowModal(true);
  };

  const handleLoreOpen = (factionId: string) => {
    const lore = loreSections.find(l => l.id.includes(factionId));
    if (lore) {
      setSelectedLore(lore);
      setShowLoreModal(true);
    }
  };

  const getFactionLore = (factionId: string) => {
    return loreSections.find(l => l.id.includes(factionId));
  };

  return (
    <>
      {/* Simple Faction Cards Feed */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {factions.map((faction) => (
          <div
            key={faction.id}
            className="relative overflow-hidden rounded-lg border border-gold/20 bg-gradient-to-br from-gold/5 to-muted/20 text-left"
          >
            {/* Background */}
            {/* Content */}
            <div className="relative p-6 space-y-4 min-h-[380px] flex flex-col justify-between">
              <div>
                {/* Name */}
                <h3 className="font-display text-2xl font-bold text-gold mb-2">
                  {faction.shortName}
                </h3>
                <p className="text-xs italic text-muted-foreground/80 mb-3">
                  {faction.tagline}
                </p>

                {/* Character Icons */}
                <div className="flex gap-3 mb-3">
                  {getFactionCharacters(faction).map((character) => (
                    <div
                      key={character.id}
                      className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/40 flex-shrink-0 bg-muted/20 p-1.5"
                      title={character.name}
                    >
                      <img
                        src={getImageUrl(character.imageUrl)}
                        alt={character.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/64x64?text=${character.name[0]}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Preview */}
              <p className="text-sm text-muted-foreground/70 whitespace-normal break-words flex-1">
                {faction.description}
              </p>

              {/* Footer with Buttons */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gold/10 gap-2">
                <Badge variant="outline" className="text-xs border-gold/30 text-gold/70">
                  {getFactionCharacters(faction).length} Members
                </Badge>
                <div className="flex gap-2">
                  {getFactionLore(faction.id) && (
                    <Button
                      onClick={() => handleLoreOpen(faction.id)}
                      size="sm"
                      variant="ghost"
                      className="text-cyan-400 hover:text-white hover:bg-cyan-500/20 gap-1"
                      title="Read detailed faction lore"
                    >
                      <BookOpen className="w-4 h-4" />
                    </Button>
                  )}
                  <Button
                    onClick={() => handleFactionSelect(faction)}
                    size="sm"
                    variant="ghost"
                    className="text-gold hover:text-white hover:bg-gold/20 gap-1"
                  >
                    Details
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Faction Details Modal */}
      {selectedFaction && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-gold">
            <div className="space-y-8">
              {/* Header */}
              <div className="border-b border-gold/10 pb-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="text-6xl flex-shrink-0">{selectedFaction.icon}</div>
                  <div className="flex-1">
                    <h2 className="font-display text-5xl font-bold text-gold mb-2">
                      {selectedFaction.shortName}
                    </h2>
                    <p className="text-xl text-muted-foreground italic mb-4">
                      {selectedFaction.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-gold/20 text-gold border-gold/30">
                        Members: {getFactionCharacters(selectedFaction).length}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Faction Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-gold mb-3">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedFaction.description}
                  </p>
                  {/* Relationship Badges */}
                  <RelationshipBadges 
                    itemId={selectedFaction.id} 
                    itemType="faction"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gold mb-3">Organization</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedFaction.organization}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gold mb-3">Knowledge & Technology</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedFaction.knowledge}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-gold mb-3">Objectives</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedFaction.objectives}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gold mb-3">Rituality & Culture</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedFaction.rituality}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gold mb-3">Technology</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedFaction.technology}
                    </p>
                  </div>
                </div>
              </div>

              {/* Characters in Faction */}
              {getFactionCharacters(selectedFaction).length > 0 && (
                <div className="border-t border-gold/10 pt-6">
                  <h3 className="font-display text-2xl font-semibold text-gold mb-6">
                    Key Members
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {getFactionCharacters(selectedFaction).map((character) => (
                      <div
                        key={character.id}
                        className="border border-gold/20 rounded-lg overflow-hidden bg-gradient-to-br from-gold/5 to-muted/20 hover:border-gold/50 transition-all flex flex-col h-full"
                      >
                        {/* Character Image */}
                        <div className="relative bg-muted/40 flex items-end justify-center p-4 h-96">
                          <img
                            src={getImageUrl(character.imageUrl)}
                            alt={character.name}
                            className="w-auto h-auto max-h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.src = `https://via.placeholder.com/300x300?text=${character.name}`;
                            }}
                          />
                        </div>

                        {/* Character Info */}
                        <div className="p-6 space-y-4 flex flex-col flex-1 justify-between">
                          <div>
                            <h4 className="font-display text-2xl font-bold text-gold mb-1">
                              {character.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">{character.role}</p>
                            <p className="text-xs italic text-muted-foreground/70">
                              {character.species} ({character.scientificName})
                            </p>
                          </div>

                          <div className="min-h-[80px]">
                            <h5 className="font-semibold text-gold text-sm mb-2">Personality</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {character.personality}
                            </p>
                          </div>

                          <div className="min-h-[80px]">
                            <h5 className="font-semibold text-gold text-sm mb-2">Description</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {character.description}
                            </p>
                          </div>

                          <div className="min-h-[80px]">
                            <h5 className="font-semibold text-gold text-sm mb-2">Objectives</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {character.objectives}
                            </p>
                          </div>

                          {/* Abilities */}
                          <div className="space-y-2 pt-4 border-t border-gold/10 min-h-[140px]">
                            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
                              <p className="text-xs font-semibold text-emerald-400 mb-1 uppercase">
                                ↑ Active Ability
                              </p>
                              <p className="text-xs text-white leading-relaxed">
                                {character.abilities.active}
                              </p>
                            </div>

                            <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/30 p-3">
                              <p className="text-xs font-semibold text-cyan-400 mb-1 uppercase">
                                ↓ Passive Ability
                              </p>
                              <p className="text-xs text-white leading-relaxed">
                                {character.abilities.passive}
                              </p>
                            </div>
                          </div>

                          {/* Full Background */}
                          {character.background && (
                            <div className="pt-4 border-t border-gold/10 min-h-[100px]">
                              <h5 className="font-semibold text-gold text-sm mb-2">Full Story</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {character.background}
                              </p>
                            </div>
                          )}

                          {/* Character Relationships */}
                          <div className="min-h-[50px] flex items-end">
                            <RelationshipBadges 
                              itemId={character.id}
                              itemType="character"
                              compact
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Faction Lore Modal */}
      {selectedLore && (
        <Dialog open={showLoreModal} onOpenChange={setShowLoreModal}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/30">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-4">
                <div className="text-5xl">{selectedLore.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {selectedLore.title}
                  </h2>
                  <Badge className="mt-2 bg-cyan-500/20 text-cyan-200 border-cyan-500/50">
                    Faction Lore
                  </Badge>
                </div>
              </div>
              <div className="prose prose-invert prose-sm max-w-none">
                <ReactMarkdown
                  components={{
                    h2: ({ ...props }) => (
                      <h2
                        className="text-2xl font-bold text-white mt-6 mb-3"
                        {...props}
                      />
                    ),
                    h3: ({ ...props }) => (
                      <h3
                        className="text-xl font-bold text-white/90 mt-4 mb-2"
                        {...props}
                      />
                    ),
                    p: ({ ...props }) => (
                      <p className="text-white/80 mb-4 leading-relaxed" {...props} />
                    ),
                    ul: ({ ...props }) => (
                      <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
                    ),
                    li: ({ ...props }) => (
                      <li className="text-white/80" {...props} />
                    ),
                    strong: ({ ...props }) => (
                      <strong className="text-white font-bold" {...props} />
                    ),
                  }}
                >
                  {selectedLore.fullContent}
                </ReactMarkdown>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
