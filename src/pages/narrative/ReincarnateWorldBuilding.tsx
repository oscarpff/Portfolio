import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/narrative/Navigation";
import Footer from "@/components/narrative/Footer";
import { Badge } from "@/components/ui/badge";
import { TimelineExpanded } from "@/components/narrative/travnik/TimelineExpanded";
import ProjectNavigation from "@/components/narrative/ProjectNavigation";
import { storyArcs, guilds, characters } from "@/data/reincarnateLore";
import type { Guild, ReinCharacter } from "@/data/reincarnateLore";

const reincarnateNavSections = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Story Arcs" },
  { id: "guilds", label: "Guilds" },
  { id: "characters", label: "Characters" },
  { id: "roadmap", label: "Roadmap" },
];

const GUILD_BADGE: Record<string, string> = {
  GLORIA: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  ESPERANZA: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  NEUTRAL: "bg-slate-500/20 text-slate-300 border-slate-500/30",
};

const GUILD_LABEL: Record<string, string> = {
  GLORIA: "Guild of Glory",
  ESPERANZA: "Guild of Hope",
  NEUTRAL: "Independent",
};

const ROADMAP_ITEMS = [
  { icon: "🗺️", title: "City Map", desc: "Interactive exploration of the city's districts, towers, and key locations." },
  { icon: "💀", title: "The Acólitos", desc: "Full faction profile for the antagonist group and the details of their plan." },
  { icon: "📖", title: "World Lore", desc: "The Fall of Humanity, the formation of robot society, and the great vanishing." },
  { icon: "👥", title: "Full Character Roster", desc: "Secondary characters and supporting cast (Alexander and others)." },
  { icon: "⚡", title: "Robot Awakening", desc: "The abilities system and the mechanics behind robot consciousness." },
  { icon: "📚", title: "Glossary", desc: "Key terms, proper nouns, and concepts of the Reincarnate world." },
  { icon: "🎨", title: "Character Artwork", desc: "Visual designs and concept art for all major characters." },
];

// ==================== PAGE ====================

const ReincarnateWorldBuilding = () => {
  const [expandedChar, setExpandedChar] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Button */}
          <Link
            to="/narrative"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-body">Back to Portfolio</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              <span className="text-gradient-gold">Reincarnate</span>
            </h1>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="outline" className="border-gold/30 text-gold">
                Worldbuilding
              </Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border border-amber-500/40">
                In Development
              </Badge>
            </div>

            <p className="text-xs text-muted-foreground/50 font-body mb-5">
              Last updated: June 12, 2026
            </p>

            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl">
              In a city that was once human, robots have inherited everything — the towers, the coliseum, the guild halls, the streets.
              Humanity has vanished. No one knows why. Some robots grieve; some worship the absence; most have simply continued
              building the world the humans left behind. In that city, a robot named Nadir is beginning to ask questions
              that were never in his design.
            </p>
          </header>

          {/* Overview Section */}
          <section id="overview" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              The <span className="text-gradient-gold">World</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Setting",
                  body: "A vast city run entirely by robots. Humans built it, named it, and then disappeared from it, leaving behind their architecture, their culture, and the machines they created to serve them. Those machines now serve only each other, and the memory of the ones who are gone.",
                },
                {
                  title: "The Question",
                  body: "Where did the humans go? Are any still alive? This is the question that drives Nadir and, beneath the surface, the question that has quietly shaped everything the guilds have built. The city is organised around an absence. The story is the search for what filled it.",
                },
                {
                  title: "The Guilds",
                  body: "The city is structured around guilds: warrior guilds that train and fight in the coliseum, adventure guilds that venture outside the walls on exploration and reconnaissance. The two dominant warrior guilds — the Guild of Glory and the Guild of Hope — represent two very different relationships to the past.",
                },
                {
                  title: "The Threat",
                  body: "The Acolytes, a faction whose name is whispered in the city, have returned. Their objectives are unclear. Their presence is not. As the guilds begin to understand the scale of what is coming, the question of who the city's true protectors are becomes urgent.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-lg border border-gold/20 bg-gradient-to-br from-gold/5 to-muted/20 p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-gold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Timeline — full width */}
        <section id="timeline" className="mb-16 scroll-mt-24 w-full">
          <div className="container mx-auto px-6 max-w-5xl mb-8">
            <h2 className="font-display text-3xl font-semibold mb-2">
              Story <span className="text-gradient-gold">Arcs</span>
            </h2>
            <p className="text-muted-foreground">
              The planned narrative structure of Reincarnate, arc by arc.
            </p>
          </div>
          <TimelineExpanded events={storyArcs} />
        </section>

        <div className="container mx-auto px-6 max-w-5xl">
          {/* Guilds Section */}
          <section id="guilds" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              Guilds & <span className="text-gradient-gold">Factions</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              The two dominant warrior guilds of the city — each a philosophy as much as an organisation.
            </p>
            <div className="grid gap-8">
              {guilds.map((guild) => (
                <GuildCard
                  key={guild.id}
                  guild={guild}
                  members={characters.filter((c) => guild.memberIds.includes(c.id))}
                />
              ))}
            </div>
          </section>

          {/* Characters Section */}
          <section id="characters" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              Characters & <span className="text-gradient-gold">Roles</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              The principal cast of Reincarnate. Click a card to expand the character's full background and development arcs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {characters.map((char) => (
                <CharacterCard
                  key={char.id}
                  character={char}
                  isExpanded={expandedChar === char.id}
                  onToggle={() =>
                    setExpandedChar(expandedChar === char.id ? null : char.id)
                  }
                />
              ))}
            </div>
          </section>

          {/* Roadmap Section */}
          <section id="roadmap" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              Roadmap / <span className="text-gradient-gold">Coming Next</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Sections currently in development. This page will grow as the project does.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {ROADMAP_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border bg-muted/10 opacity-60"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <Badge
                        variant="outline"
                        className="text-xs border-amber-500/40 text-amber-400/70"
                      >
                        Planned
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <ProjectNavigation sections={reincarnateNavSections} />
      <Footer />
    </div>
  );
};

// ==================== INLINE SUB-COMPONENTS ====================

function GuildCard({
  guild,
  members,
}: {
  guild: Guild;
  members: ReinCharacter[];
}) {
  return (
    <div className="rounded-lg border border-gold/20 bg-gradient-to-br from-gold/5 to-muted/20 p-6">
      <div className="flex items-start gap-4 mb-5">
        <span className="text-4xl flex-shrink-0">{guild.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-2xl font-bold text-gold mb-1">{guild.name}</h3>
          <p className="text-sm italic text-muted-foreground/80">{guild.tagline}</p>
        </div>
        <Badge variant="outline" className="border-gold/30 text-gold/70 text-xs flex-shrink-0">
          {members.length} {members.length === 1 ? "Member" : "Members"}
        </Badge>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">{guild.description}</p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Organization", text: guild.organization },
          { label: "Objectives", text: guild.objectives },
          { label: "Rituality", text: guild.rituality },
        ].map(({ label, text }) => (
          <div key={label}>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
              {label}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {members.length > 0 && (
        <div className="pt-4 border-t border-gold/10">
          <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">
            Key Members
          </h4>
          <div className="flex flex-wrap gap-3">
            {members.map((char) => (
              <div
                key={char.id}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/20 border border-gold/10"
              >
                <div className="w-7 h-7 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold font-bold text-xs flex-shrink-0">
                  {char.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-none">
                    {char.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{char.archetype}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CharacterCard({
  character,
  isExpanded,
  onToggle,
}: {
  character: ReinCharacter;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-lg border transition-colors cursor-pointer ${
        isExpanded
          ? "border-gold/40 bg-gradient-to-br from-gold/10 to-muted/30"
          : "border-gold/20 bg-gradient-to-br from-gold/5 to-muted/20 hover:border-gold/30"
      }`}
      onClick={onToggle}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display text-2xl font-bold text-gold mb-1">{character.name}</h3>
            <p className="text-sm text-muted-foreground">{character.role}</p>
          </div>
          <Badge className={`text-xs border flex-shrink-0 ${GUILD_BADGE[character.guild]}`}>
            {GUILD_LABEL[character.guild]}
          </Badge>
        </div>

        <Badge variant="outline" className="border-gold/20 text-gold/60 text-xs mb-4">
          {character.archetype}
        </Badge>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {character.description}
        </p>

        <div className="space-y-3">
          <div>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
              Personality
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {character.personality}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
              Objectives
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {character.objectives}
            </p>
          </div>
        </div>

        {/* Expandable background */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-[700px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 border-t border-gold/10 space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                Relationships
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {character.relationships}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                Background
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {character.background}
              </p>
            </div>
            {character.developmentArcs.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                  Development Arcs
                </h4>
                <ul className="space-y-1">
                  {character.developmentArcs.map((arc, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-gold/60 flex-shrink-0 mt-0.5">→</span>
                      {arc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <p className="text-xs text-gold/50 mt-4 font-body">
          {isExpanded ? "Click to collapse" : "Click to read full background"}
        </p>
      </div>
    </div>
  );
}

export default ReincarnateWorldBuilding;
