import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Character } from "@/data/travnikLore";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface CharacterCarouselProps {
  characters: Character[];
}

export default function CharacterCarousel({ characters }: CharacterCarouselProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    characters[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const next = () => {
    const newIndex = (currentIndex + 1) % characters.length;
    setCurrentIndex(newIndex);
    setSelectedCharacter(characters[newIndex]);
    scrollToIndex(newIndex);
  };

  const prev = () => {
    const newIndex = (currentIndex - 1 + characters.length) % characters.length;
    setCurrentIndex(newIndex);
    setSelectedCharacter(characters[newIndex]);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll("[data-character-card]");
      const card = cards[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const handleSelectCharacter = (char: Character, idx: number) => {
    setSelectedCharacter(char);
    setCurrentIndex(idx);
    scrollToIndex(idx);
  };

  return (
    <div className="w-full space-y-8">
      {/* Main Display */}
      {selectedCharacter && (
        <div
          className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-muted/40 to-muted/20 p-8 min-h-96"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative h-96 w-full overflow-hidden rounded-lg bg-muted/20 border border-white/5">
                <img
                  src={selectedCharacter.imageUrl}
                  alt={selectedCharacter.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x400?text=" +
                      selectedCharacter.name;
                  }}
                />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <h2 className="font-display text-4xl font-bold text-gold">
                    {selectedCharacter.name}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedCharacter.faction}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedCharacter.role}
                </p>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <p className="text-sm">
                  <span className="font-semibold text-gold">Species:</span>{" "}
                  {selectedCharacter.species}
                </p>
                <p className="text-xs italic text-muted-foreground">
                  ({selectedCharacter.scientificName})
                </p>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-gold">Personality</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedCharacter.personality}
                </p>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-gold">Abilities</p>
                <p className="text-xs text-emerald-400/80">
                  ↑ {selectedCharacter.abilities.active}
                </p>
                <p className="text-xs text-cyan-400/80">
                  ↓ {selectedCharacter.abilities.passive}
                </p>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="mt-6 w-full rounded-lg bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/20 border border-gold/30"
              >
                View full description
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carousel Controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 text-gold transition-colors hover:bg-gold/10"
          aria-label="Anterior personaje"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Character Cards Carousel */}
        <div
          ref={carouselRef}
          className="flex flex-1 gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {characters.map((char, idx) => (
            <div
              key={char.id}
              data-character-card
              onClick={() => handleSelectCharacter(char, idx)}
              className={`cursor-pointer flex-shrink-0 transition-all ${
                currentIndex === idx ? "ring-2 ring-gold" : ""
              }`}
            >
              <div className="group relative h-32 w-32 overflow-hidden rounded-lg border border-white/10">
                <img
                  src={char.imageUrl}
                  alt={char.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/128x128?text=" + char.name;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-2 left-2 right-2 translate-y-2 text-xs font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {char.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 text-gold transition-colors hover:bg-gold/10"
          aria-label="Next character"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Full Character Modal */}
      {selectedCharacter && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div className="pb-4 border-b border-white/10">
                <h3 className="font-display text-3xl font-bold text-gold">
                  {selectedCharacter.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {selectedCharacter.faction} • {selectedCharacter.role}
                </p>
                <p className="text-xs italic text-muted-foreground/70 mt-1">
                  {selectedCharacter.species} ({selectedCharacter.scientificName})
                </p>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gold mb-3 text-sm">General Description</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selectedCharacter.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gold mb-3 text-sm">Personality</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {selectedCharacter.personality}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gold mb-3 text-sm">Objectives</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {selectedCharacter.objectives}
                    </p>
                  </div>
                </div>

                {/* Abilities */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <h4 className="font-semibold text-gold mb-3 text-sm">Abilities</h4>
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4">
                    <p className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wide">
                      ↑ Active Ability
                    </p>
                    <p className="text-sm leading-relaxed">{selectedCharacter.abilities.active}</p>
                  </div>
                  <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 p-4">
                    <p className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
                      ↓ Passive Ability
                    </p>
                    <p className="text-sm leading-relaxed">{selectedCharacter.abilities.passive}</p>
                  </div>
                </div>

                {/* Species Info */}
                <div className="pt-2 border-t border-white/10">
                  <h4 className="font-semibold text-gold mb-3 text-sm">Biological Information</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Species: <span className="text-white">{selectedCharacter.species}</span></p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Gender: <span className="text-white">{selectedCharacter.gender}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
