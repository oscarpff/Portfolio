import { useState } from "react";
import { Character } from "@/data/travnikLore";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CharacterGridProps {
  characters: Character[];
}

export default function CharacterGrid({ characters }: CharacterGridProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  return (
    <>
      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max">
        {characters.map((character) => (
          <div
            key={character.id}
            className="group relative overflow-hidden rounded-lg border border-gold/20 bg-gradient-to-br from-gold/5 to-muted/20 transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
            onClick={() => handleCharacterSelect(character)}
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-muted/40">
              <img
                src={character.imageUrl}
                alt={character.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/300x300?text=${character.name}`;
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Name & Epithet */}
              <div>
                <h3 className="font-display font-bold text-lg text-gold group-hover:text-white transition-colors">
                  {character.name}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs border-gold/30 text-muted-foreground group-hover:border-gold/70 group-hover:text-gold transition-colors">
                  {character.faction}
                </Badge>
                <Badge variant="outline" className="text-xs border-gold/30 text-muted-foreground group-hover:border-gold/70 group-hover:text-gold transition-colors">
                  {character.role}
                </Badge>
              </div>

              {/* Quick Info */}
              <p className="text-xs text-muted-foreground line-clamp-2">
                {character.personality}
              </p>

              {/* Button */}
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCharacterSelect(character);
                }}
                variant="outline"
                size="sm"
                className="w-full border-gold/30 text-gold/70 hover:text-gold hover:border-gold/70 transition-all opacity-0 group-hover:opacity-100"
              >
                View Full Info
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Character Details */}
      {selectedCharacter && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="space-y-6">
              {/* Header with Image */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Image */}
                <div className="md:col-span-1">
                  <div className="relative h-64 overflow-hidden rounded-lg border border-gold/20 bg-muted/20">
                    <img
                      src={selectedCharacter.imageUrl}
                      alt={selectedCharacter.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/300x400?text=${selectedCharacter.name}`;
                      }}
                    />
                  </div>
                </div>

                {/* Title & Quick Info */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h2 className="font-display text-4xl font-bold text-gold mb-2">
                      {selectedCharacter.name}
                    </h2>
                  </div>

                  {/* Quick Facts Grid */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-gold/10">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">FACTION</p>
                      <p className="font-semibold text-white">{selectedCharacter.faction}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">ROLE</p>
                      <p className="font-semibold text-white">{selectedCharacter.role}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">SPECIES</p>
                      <p className="font-semibold text-white">{selectedCharacter.species}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">GENDER</p>
                      <p className="font-semibold text-white">{selectedCharacter.gender}</p>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedCharacter.personality}
                  </p>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="space-y-6 pt-6 border-t border-gold/10">
                {/* Description */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-gold mb-3">Background</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selectedCharacter.description}
                  </p>
                </div>

                {/* Objectives */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-gold mb-3">Objectives</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selectedCharacter.objectives}
                  </p>
                </div>

                {/* Abilities */}
                <div className="space-y-3">
                  <h3 className="font-display text-lg font-semibold text-gold mb-3">Abilities</h3>
                  
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4">
                    <p className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-widest">
                      ↑ Active Ability
                    </p>
                    <p className="text-sm leading-relaxed text-white">
                      {selectedCharacter.abilities.active}
                    </p>
                  </div>

                  <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/30 p-4">
                    <p className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-widest">
                      ↓ Passive Ability
                    </p>
                    <p className="text-sm leading-relaxed text-white">
                      {selectedCharacter.abilities.passive}
                    </p>
                  </div>
                </div>

                {/* Scientific Info */}
                <div className="pt-4 border-t border-gold/10">
                  <h3 className="font-display text-lg font-semibold text-gold mb-3">Biological Information</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gold/5 rounded p-3 border border-gold/10">
                      <p className="text-xs text-muted-foreground mb-1">SCIENTIFIC NAME</p>
                      <p className="text-sm font-mono text-white">{selectedCharacter.scientificName}</p>
                    </div>
                    <div className="bg-gold/5 rounded p-3 border border-gold/10">
                      <p className="text-xs text-muted-foreground mb-1">SPECIES</p>
                      <p className="text-sm text-white">{selectedCharacter.species}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
